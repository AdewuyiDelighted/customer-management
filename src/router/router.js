const express = require('express')
const router = express.Router();
const {register} = require('../controller/userController')
const {addCustomer} = require('../controller/userController')
const {updateCustomer} = require('../controller/userController')

router.route('/register').post(register)
router.route('/addCustomer').post(addCustomer)
router.route('/updateCustomer').post(updateCustomer)

module.exports = router;