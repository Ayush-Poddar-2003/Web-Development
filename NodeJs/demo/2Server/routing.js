const { log } = require('console')
const http = require('http')
//http package came pre with node

//createServer is a method that returns an instance
// const server = http.createServer((req, res)=>{
//     console.log(req.url);
    
//     res.end('Hello Server')
// })
const server = http.createServer((req, res)=>{
    if(req.url=="/about")
        req.end("I am about page")    
    if(req.url=="/profile")
        req.end("I am profile page")
})

//to run server
//Port : Entry/exit point for data
server.listen(3000)