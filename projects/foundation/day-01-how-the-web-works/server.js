const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate buffer and compute content length once
const responseBuffer = Buffer.from('Hello, World!\n');
const contentLength = responseBuffer.length;

const server = http.createServer((req, res) => {
  // Use writeHead to send status and headers in a single operation
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': contentLength
  });
  // Send pre-allocated buffer to avoid string encoding overhead
  res.end(responseBuffer);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
