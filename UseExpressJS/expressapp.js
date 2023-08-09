const errorMiddleware = require('./errorMiddleware');
const express = require('express');
const app = express();
const port = 3000;

const books = [
  { id: 1, title: 'Book 1' },
  { id: 2, title: 'Book 2' },
];
// Sample route handler that throws custom errors for different scenarios
function getBook(req, res, next) {
  const bookId = Number(req.params.id);
  const book = books.find((b) => b.id === bookId);
 
  if (!book) {
    return next(new NotFoundError(`Book with ID ${bookId} not found`));
  }
  if (bookId === 2) {
    return next(new ForbiddenError(`Access to Book 2 is forbidden`));
  }
  res.json(book);
}

app.get('/books/id', getBook);
// Error-handling middleware should be placed after other routes and middlewares
app.use(errorMiddleware);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




// // Route to handle GET requests to the root URL
// app.get('/', (req, res) => {
//   res.send('Hello, this is the root route!');
// });

// // Route to handle GET requests to /about
// app.get('/about', (req, res) => {
//   res.send('This is the about page.');
// });

// // Route to handle GET requests to /contact
// app.get('/contact', (req, res) => {
//   res.send('Contact us at contact@example.com');
// });
// // Middleware to log incoming requests
// // app.use((req, res, next) => {
// //     console.log(`Incoming request at ${new Date()}`);
// //     next();
// //   });

//   // Error handling middleware
//   app.use((err, req, res, next) => {
//     console.error(err.stack);
  
//     // Check if the error has a status code, use it for the response
//     if (err.statusCode) {
//       res.status(err.statusCode).send(err.message);
//     } else {
//       // If the error doesn't have a status code, send a generic 500 error
//       res.status(500).send('Something went wrong!');
//     }
//   });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });


