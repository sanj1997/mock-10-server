const UserModel = require("../models/user.model");

const signUpUser=async(name,email,password)=>{
    let response;
    try{
        const user=await UserModel.findOne({email:email})
        if(user)
        {
            response={message:"User account already exists"}
        }
        else
        {
            const newUser=await UserModel.create({name,email,password})
            response={message:"Account created successfully"}
        }
    }
    catch(e){
        response={message:e.message}
    }
    return response
}

const loginUser=async(email,password)=>{
    let response;
    try{
        const user=await UserModel.findOne({email:email,password:password})
        if(!user)
        {
            response={message:"Invalid credentials"}
        }
        else
        {
            response={message:"Login successful",userId:user._id}
        }
    }catch(e){
       response={message:e.message}
    }
    return response
}

const getUserInfo=async(id)=>{
    let response;
    try{
          const user=await UserModel.findById(id)
          let email=user.email
          let name=user.name
          response={message:"Successful",email:email,name:name}
    }catch(e)
    {
         response={message:e.message}
    }
    return response
}
module.exports={signUpUser,loginUser,getUserInfo}