## 2026-02-08 - Raw Node.js Buffer Response
**Learning:** In raw Node.js servers, using `res.end(Buffer)` with a pre-allocated Buffer is consistently faster (~15-20%) than `res.end(String)` due to avoiding repeated string encoding.
**Action:** Always pre-allocate static responses as Buffers in `http.createServer` handlers.
