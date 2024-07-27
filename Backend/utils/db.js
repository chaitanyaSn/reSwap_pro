const mongoose=require("mongoose")


MONGO_URL="mongodb://127.0.0.1:27017/OnlineBook"

const connectDb=async()=>{
    try{
        await mongoose.connect(MONGO_URL);
        console.log("success")

    }catch(error){
        console.log(error)
    }
}
module.exports=connectDb