import express from 'express'
import mongoose from 'mongoose'
import { userRegister } from './Controllers/user';

const app = express();
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://ayush069poddariitm_db_user:TuY3L29Ue2zbFVlR@cluster0.nhqv7o4.mongodb.net/",
    {
        dbName: "NodeJsMasteryCourse"
    }
).then(()=>console.log("MongoDb Connected..")).catch((err)=>console.log(err))

app.get('/', (req, res)=>{
    res.render('index.ejs');
})

app.post('/form-submit', userRegister)

app.listen(3000)
