# MIDDLEWARE

Any of the request before going to '/' passes via 

```js
app.use((req, res, next)=>{
    res.send("I will be automatically called")
})
```

We have 3 types of middleware

1. Middle ware inside main function
```js
app.get('/', (req, res, next)=>{
    console.log("I am middleware");
    next()
}, 

(req, res)=>{
    console.log("I AM HOME");
})
```