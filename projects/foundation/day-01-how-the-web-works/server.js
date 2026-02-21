const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const responseBody = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // Optimization: use writeHead for single-pass header writing
  // and send pre-allocated buffer to avoid string encoding on every request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
