
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt Optimization: Pre-allocate static response as a Buffer to avoid string encoding overhead on every request.
const responseBody = Buffer.from('Hello, World!\n');
// ⚡ Bolt Optimization: Calculate and set Content-Length to optimize client-side connection handling.
const responseHeaders = {
  'Content-Type': 'text/plain',
  'Content-Length': responseBody.length
};

const server = http.createServer((req, res) => {
  // ⚡ Bolt Optimization: Use res.writeHead to send status and headers in a single operation, which is measurably faster than setting them individually.
  res.writeHead(200, responseHeaders);
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
