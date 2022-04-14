/*/const express = require('express');
const  logger  = require('../logger/logger');
const helper=require('../util/helper')

const authordetails=require("../model/authormodel")
const bookdetails=require("../model/booksmodel")

const userModel=require("../model/usermodel")
const Usercontroller=require("../controller/Usercontroller")


const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('Calling welcome',logger.welcome)

     logger.welcome()
     
     helper.printDate()
     helper.printMonth()
     helper.getBatchInfo()
     
   
    res.send('welcome in route.js inside the test-me handler')

});

//const express = require('express');
//const logger = require('./logger')



// Problem 1
router.get('/movies', function (req, res) {
    let arrMovies = ["Dune", "Uncharted", "Avengers", "RRR", "Knives Out"];

    res.send(arrMovies);
});


//Problem 2 & 3
router.get('/movies/:indexNumber', function (req, res) {
    let arrMovies = ["Dune", "Uncharted", "Avengers", "RRR", "Knives Out"];

    if (req.params.indexNumber >= 0 && req.params.indexNumber < arrMovies.length)
        res.send(arrMovies[req.params.indexNumber]);
    else res.send('use a valid index number');
});


//Problem 4
router.get('/films', function (req, res) {
    let arrMovies = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }];


    res.send(arrMovies);
});


// Problem 5
router.get('/films/:indexNumber', function (req, res) {
    let arrMovies = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }];

    if (req.params.indexNumber >= 0 && req.params.indexNumber < arrMovies.length) {
        for (let i = 0; i < arrMovies.length; i++) {
            if (arrMovies[i].id == req.params.indexNumber)
            res.send(arrMovies[i]);
        }
    }
    else res.send('No movie exists with this id'); 
});



module.exports = router;

module.exports = router;
// adding this comment for no reason


//const express = require('express');

//const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
   

router.post('/players', function (req, res) {
    let x=req.body;
    let playersName=x.name
    for(let i=0;i<players.length;i++)
    {
        if(players[i].name==playersName)
        {
            res.send("Players Already eissts")
        }
    }
    players.push(x);
    res.send(players);

    res.send( {  data: players , status: true  }   )
});

//module.exports = router

router.post('/createUser',Usercontroller.createUser);
router.get('/getAllUsers',Usercontroller.getUserData);
router.get('/getBooks',Usercontroller.getBooks);
router.get('/getXINRBooks',Usercontroller.getXINRBooks);
router.get('/getRandomBooks',Usercontroller.getRandomBooks);
router.post('/getParticularBooks',Usercontroller.getParticularBooks);

/*/
const express=require('express');
const router=express.Router();
const authordetails=require("../model/authormodel")
const bookdetails=require("../model/booksmodel")

router.post("/createauthor",async function (req,res){
    const data=await authordetails.create(req.body)
    res.send({msg:data})
})

router.post("/creatbook",async function(req,res){
    const data=await bookdetails.create(req.body)
    res.send({msg:data})
})


router.get("/grtchetanbook",async function (req,res){
    const data=await authordetails.find({author_name:"Chetan Bhagat"})
    
    const id= data[0].author_id
    const bookname=await bookdetails.findOne({author_id: id}).select({name:1,_id:0})
    res.send({msg:bookname})
})

router.get("/updateprice", async function(req,res){
    const data= await bookdetails.find({name:"Two states"})
    const id=data[0].author_id
    const authorname=await authordetails.find({author_id:id}).select({author_name:1,_id:0})
    const Bookname=data[0].name
    const priceupdate=await bookdetails.findOneAndUpdate({name:Bookname},{price:100},{new:true}).select({price:1,_id:0})
    res.send({msg:authorname,priceupdate})
})


router.get("/costbetween", async function(req,res){
    const data=await bookdetails.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id= data.map(inp=> inp.author_id)
    let arr=[]
    for(let i =0; i<id.length;i++)
    {
        let k=id[i]
        const author=await authordetails.find({author_id:k}).select({author_name:1,_id:0})
        arr.push(author)
        
    }
    const authorname = arr.flat()
    res.send({msg:authorname})
})



module.exports = router