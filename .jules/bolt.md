## 2025-02-23 - Buffer Pre-allocation in Node.js HTTP Server
**Learning:** In raw Node.js HTTP servers, pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead on every request. Additionally, using `res.writeHead()` to send status and headers in a single operation is measurably faster than setting `res.statusCode` and `res.setHeader` individually.
**Action:** For static responses in high-throughput Node.js servers, always pre-allocate buffers and use `writeHead`.
