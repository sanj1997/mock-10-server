const express=require("express")
const { readFileSync } = require("fs")
const { signUpUser, loginUser, getUserInfo } = require("../controllers/auth.controller")
const router=express.Router()

router.post("/sign-up",async(req,res)=>{
    const {name,email,password}=req.body
    let response=await signUpUser(name,email,password)
    if(response.message==="User account already exists")
    {
        return res.status(401).send(response)
    }
    else if(response.message==="Account created successfully")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

router.post("/login",async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password)
    let response=await loginUser(email,password)
    if(response.message==="Invalid credentials")
    {
        return res.status(401).send(response)
    }
    else if(response.message==="Login successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})
 router.post("/profile",async(req,res)=>{
    const {id}=req.body
         let response=await getUserInfo(id)
         if(response.message==="Successful")
         {
            return res.send(response)
         }
         return res.status(401).send(response)
 })
module.exports=router