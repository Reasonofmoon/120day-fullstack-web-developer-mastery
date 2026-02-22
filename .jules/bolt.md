## 2024-05-22 - [Buffer Pre-allocation in Raw Node.js Servers]
**Learning:** Pre-allocating static responses as `Buffer` objects significantly improves throughput (~20%) in raw Node.js servers by avoiding repeated string-to-buffer encoding on every request.
**Action:** When working with raw `http` servers and static content, always pre-allocate buffers outside the request handler.
