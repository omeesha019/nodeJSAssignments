// Import the required modules
const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response content
  res.end('Hello, World!\n');
});

// Set the port to listen on
const port = 3000;

// Start the server and listen for incoming requests
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
