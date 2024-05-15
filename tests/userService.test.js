const mongoose = require("mongoose");
const { createUser, findUser, addCustomer, getCustomer, getAllCustomers} = require("../src/service/userService");
const { expect } = require("expect");
const UserAlreadyExistException = require("../src/exception/UserAlreadyExistException");
const {throws} = require("assert");

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
});

afterEach(async () => {
    await mongoose.connection.close();
});

test('tests that user can be created and registered', async () => {
    const  request =  {fullName:"renny",email:"renny12@gmail.com",password:"renny123",occupation: "tailor",defaultReminder:1}
    const response = await createUser({request});
    expect(response).not.toBeNull();
});

test('test when user can add customer', async () => {
    const addCustomerRequest = {userEmail:"renny12@gmail.com",customerName: "jide",customerEmail: "jide123@email.com",customerPhoneNumber: "0901234567",customerDescription: "Two small couch",deadlineYear:2024,deadlineMonth:6,deadlineDay:20};
    const response = await addCustomer({addCustomerRequest})
    expect(response).not.toBeNull();
})
test('test when user can add customer', async () => {
    const findCustomerRequest = {userEmail:"renny12@gmail.com",customerName: "jide" }
    const response = await getCustomer({findCustomerRequest})
    expect(response).not.toBeNull()
})

test('test when user can find all customers', async () => {
    const response = await getAllCustomers("renny12@gmail.com")
    expect(response).not.toBeNull()

})


