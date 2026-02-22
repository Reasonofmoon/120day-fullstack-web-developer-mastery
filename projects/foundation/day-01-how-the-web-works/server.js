const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate the response buffer to avoid repeated string encoding
const responseBody = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // Use writeHead to send status and headers in one go
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
