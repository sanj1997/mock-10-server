const mongoose=require("mongoose")

const dbConnect=()=>{
    return mongoose.connect("mongodb+srv://s:sanjay1997@cluster0.qnkuqjj.mongodb.net/mock")
}
module.exports=dbConnect