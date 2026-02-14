# Bolt's Journal

## 2024-05-22 - Pre-allocating Buffers for Static Responses
**Learning:** In raw Node.js HTTP servers, pre-allocating static responses as `Buffer` objects avoids repeated string encoding overhead, significantly reducing latency and stabilizing max latency.
**Action:** For any static response in a raw Node.js server, pre-allocate the response body as a `Buffer` during initialization.
