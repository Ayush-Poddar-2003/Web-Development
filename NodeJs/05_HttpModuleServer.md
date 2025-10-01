# Creating a Server
Server provides services, resources, data to other computers called clients.  
To communicate b/w client and server a protocol is followed called http.

```js
import http from 'http'

const server = http.createServer((req, res)=>{
    res.end("Server Created");
});

server.listen(3000);
// Search for `localhost:3000` on browser
```



Port ?  
Entry/exit point for data  

