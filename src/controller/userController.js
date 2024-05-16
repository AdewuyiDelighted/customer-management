const userService = require('../service/userService')

const register = async (request, response) => {
    try {
        const res = await userService.createUser(request.body);
        response.status(200).json({res})
    } catch (error) {
        response.status(400).json(error.message)
    }
};
const addCustomer = async (request, response) => {
    try {
        const res = await userService.addCustomer(request.body);
        response.status(200).json({res})
    } catch (error) {
        response.status(400).json(error.message)
    }
};
const updateCustomer = async (request, response) => {
    try {
        const res = await userService.update(request.body);
        response.status(200).json({res})
    } catch (error) {
        response.status(400).json(error.message)
    }
};
const getACustomer = async (request, response) => {
    try {
        const res = await userService.getCustomer(request.body);
        response.status(200).json({res})
    } catch (error) {
        response.status(400).json(error.message)
    }
};
const getAllCustomers = async (request, response) => {
    try {
        const res = await userService.getAllCustomers(request.body);
        response.status(200).json({res})
    } catch (error) {
        response.status(400).json(error.message)
    }
};
const removeACustomer = async (request, response) => {
    try {
        const res = await userService.deleteCustomer(request.body);
        response.status(200).json({res})
    } catch (error) {
        response.status(400).json(error.message)
    }
};
const removeAllCustomers = async (request, response) => {
    try {
        const res = await userService.deleteAllCustomers(request.body);
        response.status(200).json({res})
    } catch (error) {
        response.status(400).json(error.message)
    }
};

const setReminder = async (request, response) => {
    try {
        const res = await userService.setReminderDate(request.body);
        response.status(200).json({res})
    } catch (error) {
        response.status(400).json(error.message)
    }
};
const deleteAccount = async (request, response) => {
    try {
        const res = await userService.deleteAccount(request.body);
        response.status(200).json({res})
    } catch (error) {
        response.status(400).json(error.message)
    }
};



module.exports = {
    register,
    addCustomer,
    updateCustomer,
    getACustomer,
    deleteAccount,
    getAllCustomers,
    removeACustomer,
    removeAllCustomers,
    setReminder,
}