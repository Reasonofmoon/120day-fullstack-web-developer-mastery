
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate the response as a Buffer to avoid string encoding overhead on every request
const RESPONSE_BODY = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // Use writeHead to send status and headers in a single operation, which is measurably faster
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': RESPONSE_BODY.length
  });
  res.end(RESPONSE_BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
