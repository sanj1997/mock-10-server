const {Schema,model} =require("mongoose")

const EmiSchema=new Schema({
    amount:{type:Number},
    interest:{type:Number},
    tenure:{type:Number},
    userId:{type:Schema.Types.ObjectId,ref:"user"},
    emi:{type:Number}
})

const EmiModel=model("emi",EmiSchema)
module.exports=EmiModel