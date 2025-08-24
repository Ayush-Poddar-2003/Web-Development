# NPM ?
Use to install libraries  
To start with a project

    npm init -y 

and to install specific package   

    npm i packageName

This will add
- node_modules folder
- package-lock.json
- package.json : contains meta data

---
For eg    
https://www.npmjs.com/package/cat-me

    npm i cat-me

```js
// script.js

const catMe = require('cat-me')
// it will bring js code from
// node_modules -> cat-me -> index.js

// Read Documentation
console.log(catMe())
```

# <CENTER>GLOBAL MODULE
There are some global objects and functions that you can use anywhere in your code — without needing to require or import them.  
For eg  
`require()` : Import modules,  
`exports`  : Export from module  
`console` : Print to terminal

# <CENTER>CORE MODULE
Node.js comes with several built-in modules (no need to install via npm).

| Module   | Purpose                         |
| -------- | ------------------------------- |
| `fs`     | File system (read/write files)  |
| `http`   | Create web servers              |
| `url`    | Parse URLs                      |
| `path`   | Work with file paths            |
| `os`     | Info about the operating system |
| `events` | Handle events                   |
| `crypto` | Encryption, hashing             |
| `util`   | Utility functions               |
