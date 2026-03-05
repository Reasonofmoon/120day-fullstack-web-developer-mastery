
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt Optimization: Pre-allocate static response as Buffer to avoid string encoding overhead
// and calculate Content-Length once for faster client-side connection handling.
const responseBody = Buffer.from('Hello, World!\n');
const contentLength = responseBody.length;

const server = http.createServer((req, res) => {
  // ⚡ Bolt Optimization: Use writeHead for single-operation status and header setting
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': contentLength
  });
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
