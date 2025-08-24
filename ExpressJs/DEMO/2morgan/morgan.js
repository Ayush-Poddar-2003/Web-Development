const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
//tells everything about request

// app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.send("I am home");
})

app.get('/about', (req, res)=>{
    res.send("I am about");
})

app.listen(3000)