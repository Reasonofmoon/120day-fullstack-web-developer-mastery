const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

// Optimization: Pre-allocate the buffer to avoid string encoding overhead on every request.
const responseBody = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
