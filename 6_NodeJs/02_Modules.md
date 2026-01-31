# <center> MODULES

A module is a reusable block of code that performs a specific task and can be exported and imported in other files.  
In Node.js, each file is treated as a separate module by default.

---
Node.js has three types of modules:

#### 1. Built-in/Core (e.g., fs, http, path)
Provided by Node.js itself (no installation needed).  
Examples:

    fs → file system
    http → create server
    path → file paths
    os → system info

#### 2. Local/Custom (created by user)

#### 3. Third-party/External (installed using npm)

---
## <center> Module Systems
Node.js supports two module systems, controlled by package.json -

1. type : commonjs //default   
`const http = require("http")`

1. type : module //ES Modules   
`import http from "http"`

---
## <center>**DIFFERENCE**
| require()              | import                      |
| ---------------------- | --------------------------- |
| CommonJS syntax        | ES6 syntax                  |
| Used in Node.js        | Used in browsers/ES modules |
| Loads synchronously    | Loads asynchronously        |


---

| Feature            | Browser Console        | Node Console                     |
| ------------------ | ---------------------- | -------------------------------- |
| Environment        | Frontend (browser)     | Backend (server or local)        |
| DOM Access         | ✅ Yes                  | ❌ No                             |
| Global Objects     | `window`, `document`   | `global`, `process`, `__dirname` |
| Execution          | Runs in browser        | Runs in terminal                 |
| File System Access | ❌ No                   | ✅ Yes                            |
| Usage              | Debug client-side code | Debug server-side or scripts     |
