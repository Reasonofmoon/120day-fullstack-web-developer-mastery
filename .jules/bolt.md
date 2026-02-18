## 2026-02-18 - [Node.js Buffer Optimization]
**Learning:** In raw Node.js HTTP servers, pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead, significantly reducing latency and stabilizing max latency.
**Action:** For high-throughput static responses, always pre-calculate the response body as a Buffer outside the request handler.
