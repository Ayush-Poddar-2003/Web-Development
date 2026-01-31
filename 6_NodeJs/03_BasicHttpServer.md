📌 Browser JavaScript: Runs only on client, Cannot create servers, Cannot listen to requests

📌 Node.js: Runs JavaScript outside browser, 
Can create servers, Can handle HTTP requests & responses

---
### What is a Server?

A server is a computer/program that:-  
Provides services, data, or resources  
Responds to requests from other computers called clients

To communicate between client and server, a protocol is followed.  
👉 The most common protocol is HTTP (HyperText Transfer Protocol).

📌 HTTP defines:  
How requests are sent, How responses are returned, 
Structure of data (headers, body, status codes)

---
Creating a Server in Node.js (Using http Module)

```js
import http from 'http'
//Imports built-in http module

const server = http.createServer((req, res)=>{
    //Creates a server
    //Callback runs every time a client sends a request

    // req - Contains request data from client
    // res - Used to send response back to client

    res.end("Server Created");
    // Ends the response, Sends data to client
});


server.listen(3000);
```

👉 IP address = which computer  --
👉 Port number = which application  
Ports range from 0 to 65535