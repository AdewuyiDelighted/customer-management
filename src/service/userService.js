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
        isLocked: true

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
    let email = addCustomerRequest.valueOf().userEmail
    console.log("add customer request", addCustomerRequest.valueOf().data)
    const user = await User.findOne({email: email})
    if (user === null) {
        throw new UserNotFoundException("User Not found")
    }

    const customer = await Customer.findOne({name: user.valueOf().email + customerName})

    if (customer !== null) {
        throw new CustomerAlreadyExistException("Customer already exist (You can update Customer description if necessary)");
    }

    const newCustomer = {
        name: user.valueOf().email + customerName,
        email: customerEmail,
        phoneNumber: customerPhoneNumber,
        description: customerDescription,
    }

    const savedCustomer = await Customer.create(newCustomer)
    savedCustomer.valueOf().userId = user.valueOf()._id
    await savedCustomer.save()

    await user.save()

    return {
        message: "New customer add successfully"

    }
}

const update = async (updateCustomerRequest) => {
    const {userEmail, customerName, customerEmail, customerPhoneNumber, customerDescription} = updateCustomerRequest

}
const getCustomer = async (findCustomerRequest) => {
    const {userEmail, customerName} = findCustomerRequest

    const user = findUser(userEmail)

    const customer = Customer.findOne(user.valueOf().email + customerName)
    if (customer === null) {
        throw new CustomerAlreadyExistException("Customer not found");
    }
    return customer;


}

const getAllCustomers = async (userEmail) => {
    const user = findUser(userEmail)
    let customerList = []
    customerList = await Customer.find({userId: user.valueOf()._id})
    return customerList


}

const deleteCustomer = (deleteCustomerRequest) => {
    const {userName, customerName} = deleteCustomerRequest
    const customer = getCustomer(deleteCustomerRequest)
    Customer.deleteOne(customer)
    return "DONE"
}

const deleteAllCustomers = (userEmail) => {
    const allCustomers = getAllCustomers(userEmail)
    Customer.deleteMany(allCustomers)
    return "DONE"

}

const findUser = (email) => {
    const user = User.findOne({email: email})
    if (user === null) {
        throw new UserNotFoundException("User doesnt exist")
    }
    return user

}

module.exports = {createUser, addCustomer, update}