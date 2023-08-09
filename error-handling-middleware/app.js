const express = require('express');
const app = express();
const { NotFoundError, ForbiddenError } = require('./customErrors');
const errorMiddleware = require('./errorMiddleware');

// Your routes and other middleware should be placed before the errorMiddleware

// Sample route handler that throws custom errors for different scenarios
app.get('/books/:id', (req, res, next) => {
  const bookId = Number(req.params.id);
  if (bookId === 1) {
    throw new NotFoundError(`Book with ID ${bookId} not found`);
  } else if (bookId === 2) {
    throw new ForbiddenError(`Access to Book 2 is forbidden`);
  } else {
    res.json({ id: bookId, title: `Book ${bookId}` });
  }
});

// Error-handling middleware should be placed after other routes and middlewares
app.use(errorMiddleware);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
