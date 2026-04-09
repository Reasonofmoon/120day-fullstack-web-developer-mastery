const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const responseBuffer = Buffer.from('Hello, World!\n');
const contentLength = responseBuffer.length;

const server = http.createServer((req, res) => {
  // Optimization: use writeHead for status and headers, and send pre-allocated Buffer
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': contentLength
  });
  res.end(responseBuffer);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
