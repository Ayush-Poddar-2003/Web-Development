# Creating a Server
Server provides services, resources, data to other computers called clients.  
To communicate b/w client and server a protocol is followed called http.

```js
import http from 'http'

const server = http.createServer((req, res)=>{
    res.end("Server Created");
});

server.listen(3000);
```



Port ?  Entry/exit point for data  
Search for `localhost:3000` on browser

---

`res.write()` - Write data to response  
`res.end()`   - End response (can send data too) 
