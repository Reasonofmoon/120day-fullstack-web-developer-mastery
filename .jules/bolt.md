# Bolt's Journal

## 2026-04-01 - Raw Node.js HTTP Server Optimization
**Learning:** In raw Node.js HTTP servers without frameworks, repeated string encoding on every request adds measurable overhead. Additionally, calling `res.statusCode` and `res.setHeader` separately is slower than combining them into a single operation.
**Action:** When building raw Node.js endpoints that serve static responses, pre-allocate the response as a `Buffer` outside the request handler, compute its `Content-Length` once, and use `res.writeHead()` to send status and headers simultaneously.
