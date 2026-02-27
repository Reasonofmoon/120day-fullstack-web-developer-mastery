## 2024-05-20 - [Performance Optimization]
**Learning:** Pre-allocating Buffers and using writeHead significantly improves raw HTTP server throughput by reducing allocation and function call overhead.
**Action:** Always prefer Buffer.from() for static content and writeHead() for headers in performance-critical paths.
