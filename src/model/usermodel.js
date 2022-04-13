const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

    Bookname: String,
    Authorname: String,
    tags:["Tech","codeing"],
    isPublished: Boolean,
    pagaes:Number,
    year:Number,
    prices:{"indianPrice": "String","eurooPrice": "String"}
    
})

module.exports=mongoose.model('User',userSchema)