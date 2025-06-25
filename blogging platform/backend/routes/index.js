const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Health check
router.get('/health', (req, res) => {
  res.json({ message: 'Blogging platform backend is running.' });
});

module.exports = router;
