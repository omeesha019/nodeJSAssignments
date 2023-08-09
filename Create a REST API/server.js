const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON data
app.use(express.json());

// Sample data for books (replace this with a database in a real application)
let books = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' }
];

// Route to get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Route to get a single book by ID
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Route to create a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Route to update a book by ID
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex((b) => b.id === id);
  if (bookIndex !== -1) {
    const { title, author } = req.body;
    books[bookIndex] = { ...books[bookIndex], title, author };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Route to delete a book by ID
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter((b) => b.id !== id);
  res.json({ message: 'Book deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
