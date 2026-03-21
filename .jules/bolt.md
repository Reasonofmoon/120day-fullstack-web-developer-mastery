
## 2024-05-15 - Raw Node.js HTTP Server Optimization
**Learning:** In raw Node.js HTTP servers, using `res.writeHead()` to send status and headers in a single operation is measurably faster than setting `res.statusCode` and `res.setHeader` individually. Pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead. Explicitly calculating and setting the `Content-Length` header optimizes client-side connection handling.
**Action:** When implementing basic HTTP servers or low-level API responses in Node.js, always pre-allocate static responses as Buffers and use `res.writeHead` with an explicit `Content-Length` header for optimal throughput.
