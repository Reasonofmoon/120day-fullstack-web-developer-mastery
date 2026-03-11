const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ⚡ Bolt: Pre-allocate static response as a Buffer to avoid repeated string encoding overhead
const responseBody = Buffer.from('Hello, World!\n');

// ⚡ Bolt: Pre-define response headers, explicitly calculating Content-Length to optimize client-side connection handling
const responseHeaders = {
  'Content-Type': 'text/plain',
  'Content-Length': responseBody.length
};

const server = http.createServer((req, res) => {
  // ⚡ Bolt: Use writeHead to send status and headers in a single operation for better performance
  res.writeHead(200, responseHeaders);
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
