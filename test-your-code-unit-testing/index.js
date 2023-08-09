const express = require('express');
const multer = require('multer');
const path = require('path');


const app = express();
const port = 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage
}).single('file');

// Set up static files directory
app.use(express.static('public'));

// Serve HTML form for file upload
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handle file upload
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(500).send('An error occurred: ' + err.message);
    } else {
      if (!req.file) {
        res.send('No file selected.');
      } else {
        res.send('File uploaded successfully.');
      }
    }
  });
});

app.post('/simulate-error', (req, res) => {
    // Simulate an error by sending a 500 status
    res.status(500).send('Simulated 500 Error');
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

module.exports = app; // Export the app instance for testing
