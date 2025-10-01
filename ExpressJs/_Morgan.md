
https://www.npmjs.com/package/morgan  
A third party middle ware.

    npm i morgan

```js
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.send("I am home");
})

app.get('/about', (req, res)=>{
    res.send("I am about");
})

app.listen(3000)
```

gives everything about request in terminal

    GET /      200 6.339 ms - 9
    GET /about 200 0.748 ms - 10

    //method :url :status :res[content-length] - :response-time ms