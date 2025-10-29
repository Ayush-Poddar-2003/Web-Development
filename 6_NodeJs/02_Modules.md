# <center> MODULES

A module is a reusable block of code.
Node.js has three types of modules:

1. Built-in (e.g., fs, http, path)
2. Local (created by user)
3. Third-party (installed using npm)

---
By changing type in package.json we have 2 module system -
1. type : commonjs  
`const http = require("http")`

1. type : module  
`import http from "http"`

---
**DIFFERENCE**
| require()              | import                      |
| ---------------------- | --------------------------- |
| CommonJS syntax        | ES6 syntax                  |
| Used in Node.js        | Used in browsers/ES modules |
| Loads synchronously    | Loads asynchronously        |
