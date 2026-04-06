const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate buffer for the static response to avoid repeated string encoding overhead
const responseBody = Buffer.from('Hello, World!\n');
// Pre-calculate content length to optimize connection handling
const contentLength = responseBody.length;

const server = http.createServer((req, res) => {
  // Use writeHead to send status and headers in a single operation
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': contentLength
  });
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
