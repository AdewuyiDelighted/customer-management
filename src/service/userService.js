const User = require('../model/User')
const UserAlreadyExistException = require('../exception/UserAlreadyExistException')
const UserNotFoundException = require('../exception/UserNotFoundException')
const Customer = require("../model/Customer");
const CustomerAlreadyExistException = require("../exception/CustomerAlreadyExistException");


const createUser = async (request) => {
    const {fullName, email, password, occupation} = request;
    const user = await User.findOne({email});
    if (user) {
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
        fullName: savedUser.valueOf().fullName,
        email: savedUser.valueOf().email,
        password: savedUser.valueOf().password,
        occupation: savedUser.valueOf().occupation

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
    email = addCustomerRequest.valueOf().customerEmail

    const customer = await Customer.findOne({name: user.valueOf().email + customerName})

    if(customer !== null){
        throw new CustomerAlreadyExistException("Customer already exist (You can update Customer description if necessary)");
    }

    const newCustomer = {
        name: user.valueOf().email + customerName,
        email: customerEmail,
        phoneNumber: customerPhoneNumber,
        description: customerDescription,
    }

    const savedCustomer = await Customer.create(newCustomer)
    savedCustomer.valueOf().userId.push(user.valueOf()._id)
    await savedCustomer.save()

    await user.save()

    // let customerList = []
    // customerList = await Customer.find({userId: user.valueOf()._id})
    // console.log("customers",customerList)


    return {
        message: "New customer add successfully"

    }
}

module.exports = {createUser, addCustomer}