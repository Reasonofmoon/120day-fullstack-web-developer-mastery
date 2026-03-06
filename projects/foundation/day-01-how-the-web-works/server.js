const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt: Pre-allocate static response as a Buffer to avoid repeated string encoding overhead
const responseBody = Buffer.from('Hello, World!\n');
const contentLength = responseBody.length;

const server = http.createServer((req, res) => {
  // ⚡ Bolt: Use writeHead to send status and headers in a single operation, which is faster than individual sets
  // ⚡ Bolt: Explicitly setting Content-Length optimizes client-side connection handling
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': contentLength
  });
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
