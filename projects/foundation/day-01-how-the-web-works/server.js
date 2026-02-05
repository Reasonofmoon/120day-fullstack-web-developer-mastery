const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate the buffer to avoid creating it on every request
const responseBody = Buffer.from('Hello, World!\n');
const headers = { 'Content-Type': 'text/plain' };

const server = http.createServer((req, res) => {
  res.writeHead(200, headers);
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
