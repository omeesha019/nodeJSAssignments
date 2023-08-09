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
