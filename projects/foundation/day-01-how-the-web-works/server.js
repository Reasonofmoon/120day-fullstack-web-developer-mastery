const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate buffer for static response
// Optimization: Using a Buffer prevents creating a new Buffer from string on every request
const RESPONSE_BODY = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(RESPONSE_BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
