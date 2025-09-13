
Step 1 : Create basic server
Setup 2 : Setup MongoDB
```js
import express from 'express'
import mongoose from 'mongoose'
const app = express();

app.use(express.urlencoded({extended:true})) //middleware

//Setting up our DB, Link from s/w
mongoose.connect("mongodb+srv://ayush069poddariitm_db_user:TuY3L29Ue2zbFVlR@cluster0.nhqv7o4.mongodb.net/",
    {
        dbName: "NodeJs_Mastery_``Course"
    }
).then(()=>console.log("MongoDb Connected..")).catch((err)=>console.log(err))

app.listen(3000)

```

Step 3 : Create Views and index.ejs and create basic form
Step 4 : Create Models folder, and make model(table column of what u want), eg User.js
```js
// User.js, in caps
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    age:{type:Number},
    phone:{type:Number},
    createdAt:{type:Date, default:Date.now}
})

export const User = mongoose.model("users", userSchema)
```

Step 5 : Set up get post methods
```js
app.get('/', (req, res)=>{
    res.render('index.ejs');
})

app.post('/form-submit', async(req, res)=>{
    // console.log(req.body); //will show every data in json
    try{
        let user = await User.create(req.body);
        res.json({message:"User created sucessfully", Newuser:user, success:true});
    }
    catch(error){
        res.json({message: error.message})
    }
})
```