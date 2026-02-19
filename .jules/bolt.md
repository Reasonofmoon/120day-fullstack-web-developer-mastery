# Bolt's Journal

## 2026-02-19 - Pre-allocating Buffers in Raw Node.js
**Learning:** In raw Node.js HTTP servers, pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead on every request. This reduces CPU usage and stabilizes max latency.
**Action:** Use `Buffer.from()` for static response bodies in high-throughput scenarios.
