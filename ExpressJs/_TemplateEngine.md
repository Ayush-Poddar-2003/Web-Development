# Template Engine 

1. 
        npm i ejs
2. Create views folder
3. Create index.ejs inside views folder & write your HTML

---
```js
import express from 'express'
const app = express();

app.get('/', (req, res)=>{
    res.render('index.ejs') //No need of full path, auto detects views folder
})

const port = 3000;
app.listen(port, ()=>console.log(`Server started on port ${port}`));
```
## <center>Sending parametrs
```js
app.get('/', (req, res)=>{
    let name = "Ayush"
    res.render('index.ejs', {name})
})
```
```html
<!-- index.ejs -->
<body>
    <h1>Extracting Variable</h1>
    <h1><%=name%></h1>
</body>
```

SERVER SIDE RENDERING  
Earlier when we didn't had React/Angular we used to link css files

`app.use(express.static(path.join(path.resolve(),'public')))`