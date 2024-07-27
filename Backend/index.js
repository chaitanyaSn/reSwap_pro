const express=require("express")
const app=express()
const cors = require('cors');
const connectDb=require("./utils/db")
const Book =require("./model/book-model")


app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    console.log(req)
    res.send("welocome")
})
app.post("/add",async(req,res)=>{
try {
    if(
        !req.body.bookname||
        !req.body.price

    ){
        return res.status(400).send({
            message:"sens all required field",
        })
    }

    console.log(req.body);
    const { bookname, department, year, semester,price } = req.body;

    const bookCreated = await Book.create({ bookname, department, year, semester,price  });
    return res.status(200).send(bookCreated)
    
} catch (error) {
    console.log(error.message)
    
}
})

app.get('/detail/:id',async (req,res)=>{
    try {
      const {id}=req.params;
      const people=await Book.findById(id)
      // console.log(people[2].username)
      return res.status(200).json(people)
      
    } catch (error) {
      console.log(error)     
    }
  }
)
app.post('/find', (req, res) => {
    const { department, year, semester } = req.body;
    Book.find({ department, year, semester })
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});



connectDb().then(()=>{
    app.listen(3000,()=>{
        console.log("started")
    
    })

})