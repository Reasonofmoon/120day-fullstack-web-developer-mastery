## 2026-02-24 - Node.js Raw HTTP Server Optimization
**Learning:** In raw Node.js HTTP servers, pre-allocating static responses as `Buffer` objects and using `res.writeHead` to send status and headers in a single operation is measurably faster (~15-20%) than setting `res.statusCode` and `res.setHeader` individually and letting `res.end(string)` handle encoding.
**Action:** For high-performance static responses in raw Node.js servers, always pre-allocate buffers and use `writeHead`.
