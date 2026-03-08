const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt: Pre-allocate static response as Buffer to avoid repeated string encoding overhead
const RESPONSE_BODY = Buffer.from('Hello, World!\n');

// ⚡ Bolt: Cache headers to be used in writeHead
const HEADERS = {
  'Content-Type': 'text/plain',
  // ⚡ Bolt: Explicitly set Content-Length to optimize client-side connection handling
  'Content-Length': RESPONSE_BODY.length
};

const server = http.createServer((req, res) => {
  // ⚡ Bolt: Use writeHead to send status and headers in a single operation
  res.writeHead(200, HEADERS);
  res.end(RESPONSE_BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
