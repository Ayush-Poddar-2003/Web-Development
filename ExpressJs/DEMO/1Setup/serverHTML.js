const express = require('express');
const app = express();

//telling express that we are using ejs view engine
app.set("view engine", 'ejs')

app.use((req, res, next)=>{
    res.send("I will be automatically called")
})

app.get('/',(req, res)=>{
    res.render('index');
})

app.listen(3000)