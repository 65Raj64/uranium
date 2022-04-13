const express = require('express');
const  logger  = require('../logger/logger');
const helper=require('../util/helper')

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
router.get('/getParticularBooks',Usercontroller.getParticularBooks);


module.exports = router