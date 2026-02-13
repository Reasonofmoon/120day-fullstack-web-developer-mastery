## 2024-05-22 - Raw Node.js Buffer Allocation
**Learning:** In raw Node.js servers (Day 01), pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead, reducing average latency (0.04ms -> 0.02ms) and stabilizing max latency (65ms -> 37ms), even if throughput (req/sec) remains similar.
**Action:** When optimizing raw Node.js servers, always check for static string responses in `res.end()` and pre-allocate them.
