const express=require("express")
const { calculateEmi } = require("../controllers/emi.controller")
const router=express.Router()

router.post("/calculate",async(req,res)=>{
    const {amount,interest,tenure}=req.body 
    let response=await calculateEmi(amount,interest,tenure)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})
module.exports=router