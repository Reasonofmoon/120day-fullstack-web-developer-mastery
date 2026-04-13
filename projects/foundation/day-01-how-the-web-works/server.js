
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate the response buffer to avoid string encoding overhead on every request
const responseBody = Buffer.from('Hello, World!\n');
const headers = {
  'Content-Type': 'text/plain',
  'Content-Length': responseBody.length
};

const server = http.createServer((req, res) => {
  // Use writeHead to send status and headers in a single operation
  res.writeHead(200, headers);
  res.end(responseBody);
});

// Disable Nagle's algorithm to reduce latency
server.on('connection', socket => socket.setNoDelay(true));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
