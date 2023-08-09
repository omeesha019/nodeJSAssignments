const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse incoming JSON data
app.use(bodyParser.json());

// Define your routes here

// Start the server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

const books = []; // This will act as a temporary in-memory storage for books

// POST route for creating a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json({ message: 'Book created successfully', book: newBook });
});
