const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const errorHandlers = require('./errorHandlers');

const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Error Handlers
app.use(errorHandlers.notFound);
app.use(errorHandlers.genericError);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
