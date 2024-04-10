const User = require('../model/User')
const moment = require('moment')
const schedule = require('node-schedule')
const UserAlreadyExistException = require('../exception/UserAlreadyExistException')
const UserNotFoundException = require('../exception/UserNotFoundException')
const Customer = require("../model/Customer");
const CustomerAlreadyExistException = require("../exception/CustomerAlreadyExistException");
const NoCustomerException = require("../exception/NoCustomerException");
const InvalidDateException = require("../exception/InvalidDateException")


const createUser = async (request) => {
    const {fullName, email, password, occupation, defaultReminder} = request;
    const user = await User.findOne({email});
    if (user) {
        throw new UserAlreadyExistException("User already exist");
    }
    const newUser = {
        fullName: fullName,
        email: email,
        password: password,
        occupation: occupation,
        defaultReminder: defaultReminder,
        isLocked: true

    };

    const savedUser = await User.create(newUser);

    const response = {
        _id: savedUser._id,
        fullName: savedUser.valueOf().fullName,
        email: savedUser.valueOf().email,
        password: savedUser.valueOf().password,
        occupation: savedUser.valueOf().occupation

    };
    return {
        data: response,
        message: "Registration Successfully"
    };
};


const addCustomer = async (addCustomerRequest) => {
    const {
        userEmail,
        customerName,
        customerEmail,
        customerPhoneNumber,
        customerDescription,
        deadlineYear,
        deadlineMonth,
        deadlineDay,
        deadlineHour,
        deadlineMinute,
        deadlineSeconds
    } = addCustomerRequest;

    const date = await setDeadLine(deadlineYear, deadlineMonth, deadlineDay, deadlineHour, deadlineMinute, deadlineSeconds);


    let email = addCustomerRequest.valueOf().userEmail;

    const user = await User.findOne({email: email});
    if (user === null) {
        throw new UserNotFoundException("User Not found");
    }
    ;

    const customer = await Customer.findOne({name: user.valueOf().email + customerName});

    if (customer !== null) {
        throw new CustomerAlreadyExistException("Customer already exist (You can update Customer description if necessary)");
    }

    const newCustomer = {
        name: user.valueOf().email + customerName,
        email: customerEmail,
        phoneNumber: customerPhoneNumber,
        description: customerDescription,
        defaultDeadline: date,
    };

    const savedCustomer = await Customer.create(newCustomer);
    savedCustomer.valueOf().userId = user.valueOf()._id;
    await savedCustomer.save();

    await user.save();

    return {
        message: "New customer add successfully"

    };
};

const update = async (updateCustomerRequest) => {
    const {userEmail, customerName, customerEmail, customerPhoneNumber, customerDescription} = updateCustomerRequest

};
const getCustomer = async (findCustomerRequest) => {
    const {userEmail, customerName} = findCustomerRequest;

    const user = await findUser(userEmail);

    const customer = await Customer.findOne({name: user.valueOf().email + customerName});

    if (customer === null) {
        throw new CustomerAlreadyExistException("Customer not found");
    }

    return {
        name: customer.valueOf().name.slice(user.valueOf().email.length),
        email: customer.valueOf().email,
        phoneNumber: customer.valueOf().phoneNumber,
        description: customer.valueOf().description,
    };


};

const getAllCustomers = async (getAllCustomersRequest) => {
    const {userEmail} = getAllCustomersRequest;
    const user = await findUser(userEmail);

    let customers = await Customer.find({userId: user.valueOf()._id});

    if (customers.length === 0) {
        throw new NoCustomerException("No Customer Available");
    }

    let slicedNames = []

    slicedNames = customers.map(customer => customer.name.slice(user.email.length));

    for (let customer in customers) {
        customers[customer].name = slicedNames[customer]
        delete customers[customer].userId;
    }
    return customers;

};

const deleteCustomer = async (deleteCustomerRequest) => {

    const {userEmail, customerName} = deleteCustomerRequest;

    const user = await findUser(userEmail);

    const customer = await getCustomer(deleteCustomerRequest);

    await Customer.deleteOne({name: user.valueOf().email + customer.valueOf().name});

    return {
        message: "DONE"
    }
};


const deleteAllCustomers = async (deleteAllCustomersRequest) => {

    const {userEmail} = deleteAllCustomersRequest

    const user = await findUser(userEmail)

    let userId = user.valueOf()._id

    await Customer.deleteMany({userId: userId});

    return {
        message: "DONE"
    }

};


const findUser = async (email) => {

    const user = await User.findOne({email: email})

    if (user === null) {
        throw new UserNotFoundException("User doesnt exist")
    }
    return user

};

const setDeadLine = async (deadlineYear, deadlineMonth, deadlineDay, deadlineHour, deadlineMinute, deadlineSeconds) => {
    const date = new Date()
    date.setFullYear(deadlineYear, deadlineMonth - 1, deadlineDay)
    date.setHours(deadlineHour, deadlineMinute, deadlineSeconds)
    if (moment(date).isBefore(Date.now())) throw new InvalidDateException("Inputted Date is Invalid")
    return date
};

const setReminderDate = async (deadlineDate, userDefaultDeadlineReminder) => {
    let currentDate = new Date(deadlineDate);
    currentDate.setDate(currentDate.getDate() - userDefaultDeadlineReminder);
    return currentDate
};

const dailyReminderChecker = schedule.scheduleJob('0 15 * * *', (userEmail) => {
    const currentDate = new Date();
    const user = findUser(userEmail)
    for (let customer in getAllCustomers(userEmail)) {
        if (customer.valueOf().defaultDeadline === currentDate) {

        }
    }
    console.log('Task executed daily at 3 PM:', new Date().toLocaleTimeString());
});


const updateUserInfo = async (userUpdateRequest) => {


}


module.exports = {createUser, addCustomer, update, getCustomer, getAllCustomers, deleteCustomer, deleteAllCustomers}