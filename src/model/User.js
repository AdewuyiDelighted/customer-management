const mongoose = require('mongoose')
const Customer = require("./Customer");
const validator = require('validator');

const Schema = mongoose.Schema


const userSchema = new Schema({
    fullName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator:validateEmail,message:"Invalid Email"
        },

    },
    password: {
        type: String
    },
    occupation: {
        type: String
    },
    businessName: {
        type: String,
    },
    isLocked: {
        type: Boolean
    },
    numberOfDaysToDeadline: {
        type: String
    }

})

function validateEmail(email){
    const validEmailRegex = /[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}/;
    return validEmailRegex.test(email)
}

const User = mongoose.model("User", userSchema)
module.exports = User