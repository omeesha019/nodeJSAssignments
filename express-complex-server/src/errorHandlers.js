const notFound = (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  };
  
  const genericError = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message });
  };
  
  module.exports = {
    notFound,
    genericError,
  };
  