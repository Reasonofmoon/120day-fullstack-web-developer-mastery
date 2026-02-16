## 2025-02-18 - [Node.js Static Response Buffer Optimization]
**Learning:** In raw Node.js HTTP servers, passing a string to `res.end()` forces a new Buffer allocation and encoding on every request. Pre-allocating the response as a Buffer once at startup significantly improves throughput and reduces latency for static content.
**Action:** For high-throughput endpoints returning static data, always pre-allocate the response body as a Buffer or Uint8Array.
