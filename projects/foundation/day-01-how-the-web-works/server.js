const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Optimization: Pre-allocate static response as a Buffer to avoid repeated string encoding overhead
const RESPONSE_BODY = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // Optimization: Use writeHead to send status and headers in a single operation
  // Optimization: Explicitly set Content-Length for the pre-allocated Buffer to optimize client-side connection handling
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': RESPONSE_BODY.length
  });
  res.end(RESPONSE_BODY);
});

// Optimization: Disable Nagle's algorithm for faster responses by reducing latency
server.on('connection', (socket) => {
  socket.setNoDelay(true);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
