const express = require('express');
var bodyParser = require('body-parser');



const route = require('./routes/route.js');
const mongoose=require('mongoose')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://firstDB:zwPu7dwJG0RCXU9f@cluster0.kgij2.mongodb.net/YOUR_NAME?retryWrites=true&w=majority",
{useNewUrlParser: true})

.then(()=>console.log("mongodb is connected"))
.catch(err=>console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
