const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate the response body as a Buffer to avoid string encoding overhead per request
const RESPONSE_BODY = Buffer.from('Hello, World!\n');
// Pre-calculate the Content-Length to optimize client-side connection handling
const RESPONSE_HEADERS = {
  'Content-Type': 'text/plain',
  'Content-Length': RESPONSE_BODY.length
};

const server = http.createServer((req, res) => {
  // Use writeHead to send status and headers in a single operation
  res.writeHead(200, RESPONSE_HEADERS);
  res.end(RESPONSE_BODY);
});

// Disable Nagle's algorithm to reduce latency
server.on('connection', (socket) => {
  socket.setNoDelay(true);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
