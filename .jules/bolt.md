## 2024-05-22 - Raw Node.js Server Optimization
**Learning:** For raw Node.js HTTP servers (like in foundation projects), pre-allocating `Buffer` responses and using `res.writeHead` instead of `res.setHeader` + `res.end(string)` avoids per-request object creation and internal overhead, leading to significant throughput gains (~20%+).
**Action:** When optimizing raw Node.js servers serving static content, always pre-compute the response buffer and headers.
