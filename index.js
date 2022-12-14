const express=require("express")
const dbConnect=require("./config/connect")
const userRouter=require("./features/routes/auth.router")
const emiRouter=require("./features/routes/emi.route")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use("/emi",emiRouter)
const PORT=process.env.PORT||8080;
app.listen(PORT,async()=>{
   await dbConnect()
   console.log(`server started on ${PORT}`)
})