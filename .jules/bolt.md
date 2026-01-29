## 2024-05-23 - Node.js Buffer Allocation Impact
**Learning:** Pre-allocating `Buffer.from('string')` outside the request handler in a simple Node.js server improved throughput by ~25% (from ~20k to ~25k req/s).
**Action:** For static responses in high-throughput Node.js services, always pre-allocate buffers instead of sending strings or creating buffers per request.
