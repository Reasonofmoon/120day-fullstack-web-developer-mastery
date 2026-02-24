const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate response body as Buffer to avoid repeated string encoding
// Performance optimization: Reduces garbage collection and encoding overhead per request
const RESPONSE_BODY = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // Use writeHead to send status and headers in one go
  // Performance optimization: Reduces internal function call overhead
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(RESPONSE_BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
