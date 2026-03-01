## 2024-05-24 - [Node.js Raw HTTP Server Optimization]
**Learning:** In raw Node.js HTTP servers, pre-allocating static responses as Buffer objects avoids repeated string encoding overhead, and using `res.writeHead()` to send status and headers in a single operation is measurably faster than setting `res.statusCode` and `res.setHeader` individually.
**Action:** When working with raw Node.js HTTP servers, always look for opportunities to pre-allocate static responses as Buffers and combine header setting using `res.writeHead()`.
