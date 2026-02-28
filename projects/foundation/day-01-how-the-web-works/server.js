
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt: Pre-allocate static response as Buffer to avoid repeated string encoding overhead
const RESPONSE_BUFFER = Buffer.from('Hello, World!\n');

const server = http.createServer((req, res) => {
  // ⚡ Bolt: Using writeHead to send status and headers in a single operation is measurably faster
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(RESPONSE_BUFFER);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
