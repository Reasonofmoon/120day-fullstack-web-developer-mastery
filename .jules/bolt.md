## 2026-02-10 - [Node.js Response Buffering]
**Learning:** Pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead in `res.end()`.
**Action:** Apply this pattern to high-throughput static endpoints in raw Node.js servers.
