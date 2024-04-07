const express = require('express')
const router = express.Router();
const {register, getACustomer} = require('../controller/userController')
const {addCustomer} = require('../controller/userController')
const {updateCustomer} = require('../controller/userController')
const {getAllCustomers} = require("../controller/userController");

router.route('/register').post(register)
router.route('/addCustomer').post(addCustomer)
router.route('/updateCustomer').post(updateCustomer)
router.route('/getACustomer').post(getACustomer)
router.route('/getAllCustomers').post(getAllCustomers)

module.exports = router;