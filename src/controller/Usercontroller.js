const usermodel=require('../model/usermodel.js')

const createUser=async function(req,res){
    var data=req.body
    let savedData=await usermodel.create(data)
    res.send({msg: savedData})
}

const getUserData=async function(req,res){
    let allUsers=await usermodel.find().count()
    res.send({msg:allUsers})
}

const getBooks = async function(req, res){
    let bookData = await usermodel.find().select({ Authorname : 1,Bookname: 1,year:1 })
    res.send({msg : bookData})
}

const getXINRBooks = async function(req,res){
    let inrBooks = await usermodel.find({"prices.indianPrice" : {$in:["100INR", "200INR","560INR"]}} )
        res.send({msg : inrBooks})
}

const getRandomBooks = async function(req,res){
    let randomBook = await usermodel.find({ $or :[ {pagaes:{ $gt: 500   }}]})
    res.send({msg:  randomBook})

}

    const getParticularBooks = async function(req, res){
        let name = req.query. Authorname
        let year = req.query.year
        let bookData = await usermodel.find({$or : [{ Authorname: name},{year : year}]})
        res.send({msg : bookData})
    }


module.exports.createUser=createUser
module.exports.getUserData=getUserData
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks
module.exports. getParticularBooks= getParticularBooks
module.exports.getBooks=getBooks




