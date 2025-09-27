# <center> Node Js Introduction

**WHAT ?**  
Open source, cross platform, runtime evironment for executing js outside browser.  
Earlier Js was only used in browser and that too only for frontend.  

Google took chrome's V8 engine(written in c++) + Backend features = NodeJs

Used to create web server.

---
**INSTALLATION ?**  
Go to https://nodejs.org/en -> Download LTS  
Node and npm will get installed

Documentation : https://nodejs.org/docs/latest/api/

---
## STARTING WITH OUR PROJECT

    npm init -y

will add `package.json` in our project

---
TO RUN OUR JS FILE  

    node fileName

---
In react like we just have to write `npm run dev` no need to mention specific file name, here too we can by changing script in dependencies
```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
// Chnage it to
{
  "scripts": {
    "dev": "node fileName.js"
  },
}
```
Now if we write `npm run dev` => it will run `node fileName.js`

---



#### <CENTER>NODEMON
If we use `node fileName.js`, it doesn't show changes if made in code, we have to restart server after every change.  

    npm i nodemon -g //installing globally
    
`nodemon fileName.js`

This will auto reload server if changes are made