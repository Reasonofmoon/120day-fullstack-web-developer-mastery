
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate the response body as a Buffer to avoid string encoding overhead on each request
const responseBody = Buffer.from('Hello, World!\n');
const responseHeaders = {
  'Content-Type': 'text/plain',
  'Content-Length': responseBody.length
};

const server = http.createServer((req, res) => {
  // Use writeHead to send status and headers in a single operation, which is faster than individual sets
  res.writeHead(200, responseHeaders);
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
