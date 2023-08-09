// config.js
const dotenv = require('dotenv');
dotenv.config();

const config = {
  port: process.env.PORT || 8080,
  dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/mydatabase',
  apiKey: process.env.API_KEY || '',
  debug: process.env.DEBUG === 'true' || false,
};

module.exports = config;
