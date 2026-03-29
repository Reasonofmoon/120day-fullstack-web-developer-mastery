
## 2025-07-25 - Raw Node.js HTTP Server Optimization
**Learning:** In foundation-level raw Node.js HTTP servers (like `day-01-how-the-web-works`), setting `res.statusCode` and `res.setHeader` individually is slower than combining them with `res.writeHead()`. Additionally, dynamically creating the response string encodes it every time, adding overhead.
**Action:** When working with raw Node.js APIs, pre-allocate static responses as a `Buffer` and set `Content-Length` explicitly using `res.writeHead()` to improve throughput and reduce CPU latency.
