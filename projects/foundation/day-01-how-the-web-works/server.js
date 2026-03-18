
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Optimization: Pre-allocate static response as Buffer to avoid repeated string encoding overhead
const RESPONSE_BODY = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // Optimization: Use writeHead for faster header sending and explicit Content-Length
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': RESPONSE_BODY.length
  });
  res.end(RESPONSE_BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
