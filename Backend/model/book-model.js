const mongoose=require("mongoose")


 const bookSchema=new mongoose.Schema({
    bookname:{
        type:String,
        required:true,
    },
    department: String,
    year: Number,
    semester: Number,
    price:Number,

 })

 const Book=mongoose.model("Book",bookSchema);
 module.exports = Book;