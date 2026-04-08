const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Optimization: Pre-allocate static responses as Buffer objects to avoid repeated string encoding overhead.
const responseBody = Buffer.from('Hello, World!\n');
const contentLength = Buffer.byteLength(responseBody);

const server = http.createServer((req, res) => {
  // Optimization: Use writeHead to send status and headers in a single operation.
  // Optimization: Explicitly calculate and set the Content-Length header.
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': contentLength
  });
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
