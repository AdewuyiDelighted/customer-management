const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({

    name: {
        type: String,
        unique: true,
        require: true
    },
    email: {
        type: String,
        validate: [
            validateEmail,"Invalid Email , Please try again"
        ]

    },
    phoneNumber: {
        type: String,
        validate: [
            validatePhoneNumber, "Invalid Phone Number , Please try again"
        ]

    },
    description: {
        type: String,
    },
    defaultDeadline: {
        type: Date
    },
    userId: {
        type: String,
    },


})

function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.startsWith("+")) return (/[+][1-9][0-9]{6,12}/).test(phoneNumber);
    else return (/0[7-9][0-1][0-9]{8}/).test(phoneNumber);
}
function validateEmail(email){
    const validEmailRegex = /[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}/;
    return validEmailRegex.test(email)
}

const Customer = mongoose.model("Customer", customerSchema)
module.exports = Customer;

