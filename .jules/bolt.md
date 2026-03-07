## 2024-05-18 - Raw Node.js HTTP Server Optimization
**Learning:** Pre-allocating a static response as a Buffer avoids repeated string encoding overhead. Using `res.writeHead()` is measurably faster than `res.statusCode` and `res.setHeader()` individually. Pre-calculating and adding `Content-Length` also aids client connection handling.
**Action:** Always prefer `Buffer` and `writeHead` for static content in pure `http` Node.js servers.
