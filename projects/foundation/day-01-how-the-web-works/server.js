
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt: Pre-allocate static response as Buffer to avoid repeated string encoding overhead
const RESPONSE_BODY = Buffer.from('Hello, World!\n');
// ⚡ Bolt: Pre-calculate Content-Length for optimized client-side connection handling
const RESPONSE_LENGTH = RESPONSE_BODY.length;

const server = http.createServer((req, res) => {
  // ⚡ Bolt: Use writeHead to send status and headers in a single operation (measurably faster)
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': RESPONSE_LENGTH
  });
  res.end(RESPONSE_BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
