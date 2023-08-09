const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

// Middleware for parsing JSON data
app.use(express.json());

// Route to get all books
app.get('/books', (req, res) => {
  db.getAllBooks((err, books) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(books);
    }
  });
});

// Route to get a single book by ID
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.getBookById(id, (err, book) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  });
});

// Route to create a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = { title, author };
  db.createBook(newBook, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json(newBook);
    }
  });
});

// Route to update a book by ID
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const updatedBook = { title, author };
  db.updateBook(id, updatedBook, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(updatedBook);
    }
  });
});

// Route to delete a book by ID
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.deleteBook(id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Book deleted successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
