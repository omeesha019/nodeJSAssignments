function errorMiddleware(err, req, res, next) {
  if (!err.statusCode) {
    console.error(err.stack);
    err.statusCode = 500;
    err.message = 'Something went wrong!';
  }

  res.status(err.statusCode).json({ error: err.message });
}

module.exports = errorMiddleware;
