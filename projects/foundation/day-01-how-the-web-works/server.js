
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt Optimization: Pre-allocate static response as Buffer to avoid string encoding overhead
// and calculate length for explicit Content-Length header to optimize connection handling
const RESPONSE_BODY = Buffer.from('Hello, World!\n');
const RESPONSE_LENGTH = RESPONSE_BODY.length;

const server = http.createServer((req, res) => {
  // ⚡ Bolt Optimization: Use res.writeHead() to send status and headers in a single operation
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': RESPONSE_LENGTH
  });
  res.end(RESPONSE_BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
