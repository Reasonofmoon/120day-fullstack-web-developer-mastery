## 2026-02-12 - Pre-allocating Buffers in Raw Node.js Servers
**Learning:** In raw Node.js HTTP servers, passing a string to `res.end()` forces Node to encode it to a buffer on every request. Pre-allocating the buffer avoids this overhead.
**Action:** Always pre-allocate buffers for static responses in high-throughput Node.js services.
