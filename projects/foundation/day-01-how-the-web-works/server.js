const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Optimization: Pre-allocate buffer for static response
// This avoids creating a new buffer for every request
const RESPONSE_BODY = Buffer.from('Hello, World!\n');
// Optimization: Pre-compute headers object
// This avoids creating a new object for every request
const RESPONSE_HEADERS = {
  'Content-Type': 'text/plain',
  'Content-Length': RESPONSE_BODY.length,
};

const server = http.createServer((req, res) => {
  // Optimization: Use writeHead instead of setHeader + statusCode
  // writeHead writes directly to the stream, bypassing some internal overhead
  res.writeHead(200, RESPONSE_HEADERS);
  res.end(RESPONSE_BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
