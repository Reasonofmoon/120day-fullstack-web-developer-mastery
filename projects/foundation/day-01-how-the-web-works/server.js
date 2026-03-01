const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Bolt: Pre-allocating the static response as a Buffer avoids repeated string encoding overhead.
const responseBuffer = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // Bolt: Using res.writeHead is measurably faster than setting res.statusCode and res.setHeader individually
  // as it sends the status and headers in a single operation.
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end(responseBuffer);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
