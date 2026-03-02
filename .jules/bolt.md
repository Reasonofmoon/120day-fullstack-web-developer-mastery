## 2024-05-24 - [Optimize raw Node.js HTTP server response]
**Learning:** In raw Node.js HTTP servers, pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead. Furthermore, using `res.writeHead()` to send status and headers in a single operation is measurably faster than setting `res.statusCode` and `res.setHeader` individually.
**Action:** Always pre-allocate static responses using `Buffer.from()` and prefer `res.writeHead()` for sending headers in raw Node.js servers.
