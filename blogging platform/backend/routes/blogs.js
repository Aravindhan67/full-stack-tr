const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Blog = require('../models/Blog');
const User = require('../models/User');

// Middleware to verify JWT
function auth(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
}

// Get all blogs (public and premium)
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username isPremium');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a blog (only for authenticated users)
router.post('/', auth, async (req, res) => {
  const { title, content, isPremium } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    // Only premium users can create premium blogs
    if (isPremium && !user.isPremium) {
      return res.status(403).json({ message: 'Only premium users can create premium blogs' });
    }
    const blog = new Blog({
      title,
      content,
      author: user._id,
      isPremium: !!isPremium
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single blog (premium blogs require premium user)
router.get('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'username isPremium');
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    if (blog.isPremium && !req.user.isPremium) {
      return res.status(403).json({ message: 'Upgrade to premium to view this blog' });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a blog (only author)
router.put('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;
    if (typeof req.body.isPremium === 'boolean') blog.isPremium = req.body.isPremium;
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a blog (only author)
router.delete('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    await blog.deleteOne();
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 