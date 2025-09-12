# EXPRESS JS ?
It is a npm package, so setup same as any other package

    npm i express

```js
import express from 'express'

const app = express();

app.get('/',(req, res)=>{
    res.send('Hello World');
})

app.listen(3000)
```

![alt text](image-7.png)

