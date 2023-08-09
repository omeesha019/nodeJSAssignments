const express = require('express');
const router = express.Router();

// Route to handle GET requests to the root URL
router.get('/', (req, res) => {
  res.send('Hello, this is the root route!');
});

// Route to handle GET requests to /about
router.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Route to handle POST requests to /api/data
router.post('/data', (req, res) => {
  const data = req.body;
  // Process the data and send a response
  res.json({ message: 'Data received successfully', data });
});

module.exports = router;
