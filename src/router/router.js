const express = require('express')
const router = express.Router();
const {register} = require('../controller/userController')
const {addCustomer} = require('../controller/userController')

router.route('/register').post(register)
router.route('/addCustomer').post(addCustomer)

module.exports = router;