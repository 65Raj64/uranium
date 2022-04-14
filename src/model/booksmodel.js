const mongoose= require('mongoose');

const BookSchema=new mongoose.Schema
(
    {
        name:{type:String,require:true},
        author_id:{type:Number,require:true},
        price:{type:Number,require:true},
        rating:{type:Number,require:true},
    },

    {timeseries:true}
);

module.exports=mongoose.model("AuthorBook",BookSchema)