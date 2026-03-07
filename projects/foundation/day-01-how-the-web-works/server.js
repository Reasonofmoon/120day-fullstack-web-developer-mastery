const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate static response as a Buffer to avoid repeated string encoding overhead
const RESPONSE_BODY = Buffer.from('Hello, World!\n');
const CONTENT_LENGTH = RESPONSE_BODY.length;

const server = http.createServer((req, res) => {
  // Use writeHead to send status and headers in a single operation (measurably faster)
  // Explicitly setting Content-Length optimizes client-side connection handling
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': CONTENT_LENGTH
  });
  res.end(RESPONSE_BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
