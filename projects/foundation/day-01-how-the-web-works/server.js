
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Optimization: Pre-allocate static response as Buffer to avoid repeated string encoding overhead
const responseBody = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // Optimization: Use writeHead to send status and headers in a single operation
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': responseBody.length
  });
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
