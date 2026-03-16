
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt Optimization:
// Pre-allocating a static Buffer avoids string encoding overhead on every request.
const responseBuffer = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // ⚡ Bolt Optimization:
  // Using writeHead with an explicit Content-Length is measurably faster than
  // setting statusCode and setHeader individually.
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': responseBuffer.length
  });
  res.end(responseBuffer);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
