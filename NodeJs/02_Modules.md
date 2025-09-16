# <center>NPM ?
Use to install libraries  
To start with a project

    npm init -y 

and to install specific package   

    npm i <packageName>

This will add
- node_modules folder
- package-lock.json
- package.json : contains meta data



# <center> MODULES
Other name to function

TYPE 1 : 
```js
// utils.js
const sum = (a,b) => a+b;
const sub = (a,b) => a-b;
module.exports = {sum, sub};
```
```js
//index.js
const {sum, sub} = require('./utils.js')
console.log(sum(10, 20));
console.log(sub(30, 20));
```

TYPE 2 :-  
Go to `package.json`
Add `"type" : "module",`
```js
// utils.js
export const sum = (a,b) => a+b;
export const sub = (a,b) => a-b;
```
```js
// index.js
import {sum, sub} from './utils.js'
console.log(sum(10, 20));
console.log(sub(30, 20));
```

### <CENTER>GLOBAL MODULE
There are some global objects and functions that you can use anywhere in your code — without needing to require or import them.  
For eg  
`require()` : Import modules,  
`exports`  : Export from module  
`console` : Print to terminal

### <CENTER>CORE MODULE
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
