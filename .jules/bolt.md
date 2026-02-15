## 2026-02-15 - Raw Node.js Buffer Optimization
**Learning:** In raw Node.js HTTP servers, pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead, significantly reducing latency and stabilizing max latency.
**Action:** For high-throughput static responses, always pre-allocate Buffers instead of sending strings repeatedly.
