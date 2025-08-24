# Express HTML
To display an html page on request, 
We need a view engine

    npm i EJS //one of view enigne's

```js
const express = require('express');
const app = express();

//telling express that we are using ejs view engine
app.set("view engine", 'ejs')

app.get('/',(req, res)=>{
    res.render('index'); //render instead of send
})

app.listen(3000)
```
Create a folder views and add file with name `index.ejs`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```