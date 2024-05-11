const mongoose = require('mongoose')
const Customer = require("./Customer");
const Schema = mongoose.Schema


const userSchema = new Schema({
    fullName: {
        type: String
    },
    email: {
        type: String,
        unique:true
    },
    password: {
        type: String
    },
    occupation: {
        type: String
    },
    businessName:{
        type:String,
    },
    isLocked:{
        type: Boolean
    },
    numberOfDaysToReminder: {
        type:String
    }

})

const User = mongoose.model("User", userSchema)
module.exports = User