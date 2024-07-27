// const express=require("express")
// const router=express.Router()
// const Book =require("../model/book-model")



// router.get('/',(req,res)=>{
//     console.log(req);
//     return res.send("welocome")
// })
// router.post('/add', async(req, res) => {
//    try {
    
//    } catch (error) {
//     consile.log(error.message)
    
//    }
   
// });


// router.post('/find', (req, res) => {
//     const { department, year, semester } = req.body;
//     Book.find({ department, year, semester })
//         .then(books => res.json(books))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;