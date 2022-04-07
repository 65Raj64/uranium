let lodash=require('lodash');
const express = require('express');
const  logger  = require('../logger/logger');
const helper=require('../util/helper')
const formatter=require('../validator/formatter')


const router = express.Router();

router.get('/test-me', function (req, res) {

let arr=['january','february','March','April','May','June','July','Augest','September','october','novmber','Decmber'];

let parts= lodash.chunk(arr,3);
console.log(parts);

let arr2=[1,2,5,7,9,11,13,15,17,19];
let odd=lodash.tail(arr2,9);
console.log(odd);

let a=[2,7,5,9];
let b=[6,8,7,1];
let c=[11,5,25,4];
let d=[50,20,10,12];
let e=[5,9,15,3];
let subArrays=lodash.union(a,b,c,d,e);
console.log(subArrays);



let Pairs=[["horror","The Shining"],["Drama","Titanic"],["Thriller","Shutter"],["Fantasy","Pans Labriant"]]
let obj=lodash.fromPairs(Pairs);
console.log(obj);

    console.log('Calling welcome',logger.welcome)

     logger.welcome()
     

     helper.printDate()
     helper.printMonth()
     helper.getBatchInfo()
     

     console.log('This is term')
     formatter.trim1()
     
     console.log('This is lower')
     formatter.trim2()
     
     
     console.log('This is Upper')
     formatter.trim3()
     
     //formatter.trim1()
     //formatter.changeToLowerCase()
     //formatter.changeToUpperCase()
     
   
    res.send('welcome in route.js inside the test-me handler')

});

module.exports = router;
// adding this comment for no reason