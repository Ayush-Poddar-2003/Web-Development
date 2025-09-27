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


---
# <center> MODULES
By changing type in package.json we have 2 types -
#### 1. type : commonjs
`const http = requie("http")`

#### 2. type : module
`import http from "http"`