const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate the response body as a Buffer to avoid repeated string encoding overhead
const responseBody = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // Use res.writeHead to send status and headers in a single operation,
  // and include Content-Length for optimized client connection handling
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': responseBody.length
  });
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
