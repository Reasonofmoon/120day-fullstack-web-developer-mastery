## 2024-05-06 - DOM Insertion Optimization
**Learning:** Appending DOM elements individually inside a loop causes multiple layout reflows and repaints, which is a performance bottleneck in frontend vanilla JS.
**Action:** Use a `DocumentFragment` to batch DOM element insertions before appending them to the active document.
