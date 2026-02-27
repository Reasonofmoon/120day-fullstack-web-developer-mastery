const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// OPTIMIZATION: Pre-allocate the buffer for static response body.
// This avoids repeated string encoding and allocation on every request.
const BODY = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // OPTIMIZATION: Send status and headers in a single operation.
  // This reduces the number of internal function calls compared to setting them individually.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
