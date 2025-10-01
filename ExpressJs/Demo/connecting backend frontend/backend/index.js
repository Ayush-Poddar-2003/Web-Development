import express from 'express'
import cors from 'cors'
let app = express();

app.use(cors({
    "origin":"http://localhost:5173"
}))

app.use(express.json())

app.get('/', (req, res)=>{
    res.json({
        name:"Ayush",
        age:21
    })
})

app.post('/', (req, res)=>{
    res.send({success:true}) //sending it to front end as response
    console.log(req.body)
})

app.listen(8000, ()=>{
    console.log("Server started");
})