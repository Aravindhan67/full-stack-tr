const express = require('express');
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a new post
router.post('/', authMiddleware, createPost);

// Route to get all posts
router.get('/', getPosts);

// Route to get a single post by ID
router.get('/:id', getPostById);

// Route to update a post by ID
router.put('/:id', authMiddleware, updatePost);

// Route to delete a post by ID
router.delete('/:id', authMiddleware, deletePost);

module.exports = router;