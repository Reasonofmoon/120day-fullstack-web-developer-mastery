
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt: Pre-allocate static response to avoid repeated string encoding overhead
const responseBuffer = Buffer.from('Hello, World!\n');
// ⚡ Bolt: Explicitly calculate and set Content-Length to optimize client-side connection handling
const contentLength = responseBuffer.length;

const server = http.createServer((req, res) => {
  // ⚡ Bolt: Use writeHead to send status and headers in a single operation
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': contentLength
  });
  // ⚡ Bolt: Send the pre-allocated Buffer directly
  res.end(responseBuffer);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
