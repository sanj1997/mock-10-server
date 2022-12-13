const calculateEmi=async(amount,interest,tenure)=>{
     let response;
     try{
         let r=interest/12
         let rate=r/100
        //  P x r x ( 1 + r )n / ( ( 1 + r )n - 1 ) 
        
         rate=rate.toFixed(6)
         console.log(rate)
         let numerator=amount*((rate+1)**tenure)
         let denominator=((1+rate)**tenure)-1
         let E=numerator/denominator
         response={message:"Successful",emi:E}
     }catch(e){
        response={message:e.message}
     }
     return response
}
module.exports={calculateEmi}