const sqlite3 = require('sqlite3').verbose();

// Create a new database or connect to an existing one
const db = new sqlite3.Database('books.db');

// Create the books table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY,
      title TEXT,
      author TEXT
    )
  `);
});

// Function to retrieve all books
const getAllBooks = (callback) => {
  db.all('SELECT * FROM books', callback);
};

// Function to retrieve a single book by ID
const getBookById = (id, callback) => {
  db.get('SELECT * FROM books WHERE id = ?', id, callback);
};

// Function to create a new book
const createBook = (book, callback) => {
  db.run(
    'INSERT INTO books (title, author) VALUES (?, ?)',
    book.title,
    book.author,
    callback
  );
};

// Function to update a book by ID
const updateBook = (id, book, callback) => {
  db.run(
    'UPDATE books SET title = ?, author = ? WHERE id = ?',
    book.title,
    book.author,
    id,
    callback
  );
};

// Function to delete a book by ID
const deleteBook = (id, callback) => {
  db.run('DELETE FROM books WHERE id = ?', id, callback);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};
