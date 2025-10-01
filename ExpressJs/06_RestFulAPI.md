# RESTful API
Representational state transfer   
Way for applications to communicate with each other over internet using standard HTTP requests like GET, POST, PUT, DELETE

We dont send request in html format as it might wont work with moblie applications  
We do send them in json format 

This json data is brought by RESTful API (Application progam interface)

---
Let's connect our frontend with backend  
Displaying backend data on frontend

```js
// app.jsx (frontend)

const App = () => {

  //Fetching data from URL
  async function getRes() {
    const res = await fetch("http://localhost:8000/")
    //Converting it into json format
    let data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <button onClick={()=>getRes()}>Send</button>
    </div>
  )
} 

export default App

// localhost:8000 stores {'name':"ayush", "age":21}  
```

But on clicking button -> Error
![alt text](image-16.png)

---
## <center> CORS?
Cross origin resource sharing.  
A security feature in browser that prevents different requests from different origins unless explicitly allowed by the browser.  
cors is also a middle ware.

`npm i cors`

```js
//Backend
import express from 'express'
import cors from 'cors'
let app = express();

app.use(cors())//Will allow everyone

app.get('/', (req, res)=>{
    res.json({
        name:"Ayush",
        age:21
    })
})

app.listen(8000, ()=>{
    console.log("Server started");
})
```
```jsx
//Frontend
function App() 
{
  async function getRes() {
    let res = await fetch("http://localhost:8000/")
    let data = res.json();
    console.log(data);
  }

  return (
    <div>
      <button onClick={()=>getRes()}>Send</button>
    </div>
  )
} 

export default App
```

![alt text](image-18.png)

### Using error handling

```jsx
async function getRes() {
    let res = await fetch("http://localhost:8000/")
    let data = res.json();
    // console.log(data);

    data.then((e)=>{
      console.log(e);
    })
    .catch((e)=>{
      console.log(e);
    })
}
```
![alt text](image-19.png)