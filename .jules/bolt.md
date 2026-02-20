## 2025-02-21 - Node.js HTTP Response Optimization
**Learning:** In a raw Node.js HTTP server, using `res.writeHead(200, headers)` combined with a pre-allocated `Buffer` is significantly faster (~28% in this case) than setting `res.statusCode`, `res.setHeader`, and sending a string or even a buffer separately. The overhead of multiple property setters and internal state management for headers adds up in high-throughput scenarios.
**Action:** When optimizing raw Node.js servers for maximum throughput, prefer `res.writeHead` and pre-allocated `Buffer` responses for static content.
