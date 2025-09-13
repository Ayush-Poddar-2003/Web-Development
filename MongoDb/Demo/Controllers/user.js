import {User} from '../Models/User.js'

export const userRegister = async(req, res)=>{
    // console.log(req.body); //will show every data in json
    try{
        let user = await User.create(req.body);
        res.json({message:"User created sucessfully", Newuser:user, success:true});
    }
    catch(error){
        res.json({message: error.message})
    }
}