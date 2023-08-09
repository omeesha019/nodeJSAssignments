const express = require('express');
const config = require('./config');

const app = express();

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

if (config.debug) {
  console.log('Debug mode is enabled');
}

// Use the config.dbUrl to connect to your database
// Use the config.apiKey to make API requests, etc.
// Add an error handler for the 'error' event on the app
app.on('error', (error) => {
    console.error('An error occurred:', error);
  });
  
  // Optional: Add a default error handler for uncaught exceptions
  process.on('uncaughtException', (error) => {
    console.error('Uncaught exception occurred:', error);
    process.exit(1); // Exit the process to avoid unexpected behavior
  });