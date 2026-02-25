## 2024-05-23 - Raw Node Server Optimization
**Learning:** Pre-allocating `Buffer` and using `res.writeHead` instead of `setHeader`/`statusCode` significantly improves throughput in raw Node.js servers (measured ~10% improvement).
**Action:** Always prefer `writeHead` and `Buffer` for static content in high-performance scenarios.
