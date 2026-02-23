const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Optimization: Pre-allocate buffer to avoid repeated string encoding
// This reduces CPU overhead for static responses
const responseBody = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // Optimization: Send status and headers in one go
  // writeHead combines multiple internal operations, slightly faster than
  // setting statusCode and headers separately.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
