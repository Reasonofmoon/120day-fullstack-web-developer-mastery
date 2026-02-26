
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate buffer for static response to avoid repeated encoding
const RESPONSE_BODY = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // Use writeHead to send status and headers in one go
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': RESPONSE_BODY.length,
  });
  res.end(RESPONSE_BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
