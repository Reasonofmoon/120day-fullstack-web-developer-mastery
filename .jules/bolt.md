## 2024-05-23 - Raw HTTP Server Optimization
**Learning:** In raw Node.js http servers, combining `res.writeHead` with a pre-allocated `Buffer` for the response body yielded a ~30% throughput increase compared to `res.end(string)` or separate `setHeader` calls.
**Action:** Prefer pre-allocated Buffers and `writeHead` for static responses in foundation projects.
