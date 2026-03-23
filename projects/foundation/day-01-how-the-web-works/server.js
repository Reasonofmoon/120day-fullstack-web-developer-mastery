
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt: Pre-allocate static responses as `Buffer` objects avoids repeated string encoding overhead.
const responseBuffer = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // ⚡ Bolt: using `res.writeHead()` to send status and headers in a single operation is measurably faster
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': responseBuffer.length // ⚡ Bolt: explicitly calculating and setting the `Content-Length` header optimizes client-side connection handling
  });
  res.end(responseBuffer);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
