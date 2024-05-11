const express = require('express')
const router = express.Router();
const {register, getACustomer, removeACustomer, removeAllCustomers, setReminder} = require('../controller/userController')
const {addCustomer} = require('../controller/userController')
const {updateCustomer} = require('../controller/userController')
const {getAllCustomers} = require("../controller/userController");

router.route('/register').post(register)
router.route('/addCustomer').post(addCustomer)
router.route('/updateCustomer').post(updateCustomer)
router.route('/getACustomer').get(getACustomer)
router.route('/getAllCustomers').get(getAllCustomers)
router.route('/removeACustomer').post(removeACustomer)
router.route('/removeAllCustomers').post(removeAllCustomers)
router.route('/setReminderDate').get(setReminder)

module.exports = router;