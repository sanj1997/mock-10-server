const express=require("express")
const dbConnect=require("../mock-10-backend/config/connect")
const userRouter=require("../mock-10-backend/features/routes/auth.router")
const emiRouter=require("../mock-10-backend/features/routes/emi.route")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use("/emi",emiRouter)
app.listen(8080,async()=>{
   await dbConnect()
   console.log("server started on http://localhost:8080")
})