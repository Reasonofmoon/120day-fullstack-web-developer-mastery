
## 2026-03-31 - Optimize Raw Node.js HTTP Server Response
**Learning:** In raw Node.js HTTP servers (like `day-01-how-the-web-works/server.js`), repeatedly encoding strings and setting individual headers (like `res.statusCode = 200` and `res.setHeader()`) for static responses incurs significant overhead under load.
**Action:** Pre-allocate static responses as `Buffer` objects and pre-calculate their `length`. Use `res.writeHead()` to send the status code, `Content-Type`, and explicitly set `Content-Length` in a single operation. This avoids repeated string encoding overhead and optimizes client-side connection handling, significantly increasing requests per second.
