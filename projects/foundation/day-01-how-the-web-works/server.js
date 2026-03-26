
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt: Pre-allocate static response as Buffer to avoid repeated string encoding overhead.
const responseBody = Buffer.from('Hello, World!\n');
const headers = {
  'Content-Type': 'text/plain',
  // ⚡ Bolt: Explicitly calculating and setting Content-Length optimizes client-side connection handling.
  'Content-Length': responseBody.length
};

const server = http.createServer((req, res) => {
  // ⚡ Bolt: Use res.writeHead() to send status and headers in a single operation, which is measurably faster.
  res.writeHead(200, headers);
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
