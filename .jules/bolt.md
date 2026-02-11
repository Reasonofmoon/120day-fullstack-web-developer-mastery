## 2025-02-17 - Node.js Buffer Optimization
**Learning:** In raw Node.js HTTP servers, pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead on every request. This is a micro-optimization that becomes measurable at high throughput (~2.2% increase in this case).
**Action:** Use `Buffer.from(string)` for static response bodies in performance-critical paths.

## 2025-02-17 - Process Management for Benchmarking
**Learning:** When running a server in the background for benchmarking, reliable termination is crucial. `kill $(lsof -t -i :<port>)` is the most effective way to ensure the port is released.
**Action:** Always include a cleanup step using `lsof` to kill the server process by port.
