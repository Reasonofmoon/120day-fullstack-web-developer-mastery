## 2026-03-08 - [Optimize raw Node.js HTTP response handling]
**Learning:** In raw Node.js HTTP servers, using `res.writeHead()` to send status and headers in a single operation is measurably faster than setting `res.statusCode` and `res.setHeader` individually. Pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead. Explicitly calculating and setting the `Content-Length` header optimizes client-side connection handling.
**Action:** Always pre-allocate static responses as Buffers and use `res.writeHead()` when using the raw `http` module in Node.js.
