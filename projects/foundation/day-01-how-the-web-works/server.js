
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate the response as a Buffer to avoid repeated string encoding overhead
const RESPONSE_BODY = Buffer.from('Hello, World!\n');
// Calculate Content-Length once to optimize client-side connection handling
const RESPONSE_HEADERS = {
  'Content-Type': 'text/plain',
  'Content-Length': RESPONSE_BODY.length
};

const server = http.createServer((req, res) => {
  // Use res.writeHead to send status and headers in a single operation, which is measurably faster
  res.writeHead(200, RESPONSE_HEADERS);
  res.end(RESPONSE_BODY);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
