# ROUTING
How application responds to different client requests based on URL.  

```js
const http = require('http')

const server = http.createServer((req, res)=>
{
    if(req.url=="/about")
        res.end("I am about page")  

    else if(req.url=="/profile")
        res.end("I am profile page")

    else
        res.end("Error Page not found")
})

server.listen(3000)
```

