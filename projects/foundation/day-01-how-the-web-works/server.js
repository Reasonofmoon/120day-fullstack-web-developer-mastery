const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Pre-allocate the response body as a Buffer to avoid
// repeated string-to-buffer conversion overhead on every request.
const responseBody = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
