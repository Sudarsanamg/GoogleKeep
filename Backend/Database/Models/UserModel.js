const mongoose = require('mongoose');

const userModel=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    array: {
        type: Array,
        required: true
    }
})

const model=mongoose.model('user',userModel);
module.exports=model;
