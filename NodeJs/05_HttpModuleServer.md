# Creating a Server

```js
import http from 'http'

const server = http.createServer((req, res)=>{
    res.end("Request made");
});
const port = 3000;

server.listen(port, ()=>console.log("Server is running"));
```



Port ?  Entry/exit point for data  
Search for `localhost:3000` on browser

---

`res.write()` - Write data to response  
`res.end()`   - End response (can send data too) 
