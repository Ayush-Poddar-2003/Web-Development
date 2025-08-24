const http = require('http')

//createServer is a method that returns an instance
const server = http.createServer((req, res)=>{
    res.write("Server Created")
    res.end('Completed and ended')
})

//to run server
server.listen(3000)
