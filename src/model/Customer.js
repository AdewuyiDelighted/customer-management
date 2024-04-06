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
    },
    phoneNumber: {
        type: String,
    },
    description: {
        type: String,
    },
    userId: {
        type: String,
    },
    isLocked:{
        type: Boolean
    }


})

const Customer = mongoose.model("Customer", customerSchema)
module.exports = Customer;