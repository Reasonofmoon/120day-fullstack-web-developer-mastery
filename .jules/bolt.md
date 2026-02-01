## 2024-05-22 - Raw Node.js Buffer Optimization
**Learning:** In raw Node.js HTTP servers (like Day 01), sending a string response triggers internal buffer conversion on every request.
**Action:** Pre-allocate static responses as Buffers (`Buffer.from(...)`) to improve throughput (observed ~14% increase in hello-world benchmark).
