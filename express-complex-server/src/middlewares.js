const customMiddleware = (req, res, next) => {
    console.log('Custom middleware executed.');
    next();
  };
  
  module.exports = {
    customMiddleware,
  };
  