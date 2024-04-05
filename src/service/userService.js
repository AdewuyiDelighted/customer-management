const User = require('../model/User')
const UserAlreadyExistException = require('../exception/UserAlreadyExistException')
const UserNotFoundException = require('../exception/UserNotFoundException')
const Customer = require("../model/Customer");


const createUser = async (request) => {
    const {fullName, email, password, occupation} = request;
    const user = await User.findOne({email});
    if (user) {
        console.log(user)
        throw new UserAlreadyExistException("User already exist");
    }
    const newUser = {
        fullName: fullName,
        email: email,
        password: password,
        occupation: occupation,
    };

    const savedUser = await User.create(newUser)

    const response = {
        _id: savedUser._id,
        fullName: savedUser.fullName,
        email: savedUser.email,
        password: savedUser.password,
        occupation: savedUser.occupation,
    }
    return {
        data: response,
        message: "Registration Successfully"
    }
}
const addCustomer = async (addCustomerRequest) => {
    const {userEmail, customerName, customerEmail, customerPhoneNumber, customerDescription} = addCustomerRequest
    email = addCustomerRequest.valueOf().userEmail

    const user = await User.findOne({email: email})
    if (user === null) {
        throw new UserNotFoundException("User Not found")
    }

    const newCustomer = {
        name: customerName,
        email: customerEmail,
        phoneNumber: customerPhoneNumber,
        description: customerDescription,
    }
    const savedCustomer = await Customer.create(newCustomer)

    user.valueOf().customers.push(savedCustomer)

    return {
        message: "New customer add successfully"
    }

}

module.exports = {createUser, addCustomer}