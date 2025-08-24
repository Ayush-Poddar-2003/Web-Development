const express = require('express');

//Functions get to app
const app = express();

app.get('/',(req, res)=>{
    res.send('Hello World');
})

app.get('/about',(req, res)=>{
    res.send('I Am About Section');
})

app.listen(3000)