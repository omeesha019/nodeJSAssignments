const dotenv = require('dotenv');
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL || 'http://localhost:27017/mydatabase',
  apiKey: process.env.API_KEY || '',
  debug: process.env.DEBUG === 'true' || false,
};

module.exports = config;
