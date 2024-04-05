const userService = require('../service/userService')

const register = async (request, response) =>{
    try{
        const res = await userService.createUser(request.body);
        response.status(200).json({res})
    }catch (error){
        response.status(500).json(error.message)
    }
};
const addCustomer = async (request, response) =>{
    try{
        const res = await userService.addCustomer(request.body);
        response.status(200).json({res})
    }catch (error){
        response.status(500).json(error.message)
    }
};



module.exports = {register,addCustomer}