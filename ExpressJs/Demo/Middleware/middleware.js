import express from 'express'
const app = express();
app.use(express.json())

let password = "ayush123"

app.use((req, res, next)=>{
    if(req.body.pass!=password){
        res.send("Password not Matched")
    }
    next();
})

app.post("/", (req, res)=>{
    console.log(req.body) //data sent via thunderclient
    res.status(269).send({success:true})
})

app.listen(8000, ()=>{
    console.log("Server Started");
})