# Bolt's Journal

## 2024-05-22 - Pre-allocating Buffers for Static Responses
**Learning:** In raw Node.js HTTP servers, pre-allocating static string responses into Buffers reduces CPU overhead per request by avoiding repeated string-to-Buffer encoding (UTF-8).
**Action:** When serving static content using raw `http` module, define response bodies as `Buffer` constants outside the request handler.
