## 2025-02-12 - Raw Node.js HTTP Server Optimizations
**Learning:** In raw Node.js HTTP servers, pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead. Using `res.writeHead()` to send status and headers in a single operation is measurably faster than setting `res.statusCode` and `res.setHeader` individually. Additionally, explicitly calculating and setting the `Content-Length` header optimizes client-side connection handling.
**Action:** Apply these optimizations to raw Node.js HTTP servers serving static content to improve throughput and reduce latency.
