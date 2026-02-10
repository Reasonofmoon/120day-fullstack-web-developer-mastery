
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate the response buffer to avoid string encoding on every request
// Performance optimization: Reduces overhead for static responses
const responseBody = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
