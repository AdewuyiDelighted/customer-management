const mongoose = require('mongoose')
const Customer = require("./Customer");
const Schema = mongoose.Schema


const userSchema = new Schema({
    fullName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    occupation:{
       type:String
    },
    customers:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Customer'}
    ]
})

const User = mongoose.model("User",userSchema)
module.exports= User