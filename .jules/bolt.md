## 2024-05-24 - Buffer Pre-allocation & writeHead in Raw Node.js
**Learning:** In raw Node.js HTTP servers without frameworks, pre-allocating the response as a Buffer (`Buffer.from()`) avoids repeated string encoding overhead. Furthermore, using `res.writeHead(status, headers)` is measurably faster than setting `res.statusCode` and `res.setHeader` individually. Explicitly calculating and setting `Content-Length` also optimizes client-side connection handling.
**Action:** Always pre-allocate static responses as Buffers and use `writeHead` for status and headers in raw Node.js servers.

## 2024-05-24 - Reliable Server Termination in Benchmarks
**Learning:** Using `kill $!` doesn't always work if the process drops out of the current shell's immediate awareness or if the previous server wasn't properly killed before the new one started, resulting in port conflicts and benchmarking failures.
**Action:** When running background server processes within a bash session, ensure port termination via `kill $(lsof -t -i :[port])` to be absolutely certain the port is clear before starting a new server, and cleanly tear it down after testing.
