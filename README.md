# customer-management

## Table of content

* [Introduction](#Introduction)
* [Pre-requisites](#Pre-requisites)
* [Features](#features)
* [HOW TO INSTALL PROGRAM](#how-to-install-program)
* [ENDPOINT](#endpoint)

## Introduction

Customer Management is an application that enable service providers to keep record of the clients in information,
set deadline for each client,view all client details
This application is developed with Node.js using Express framework

### Pre-requisites

* Node.js
* Express

### **Features**

* Register
* Login
* addCustomer
* getACustomer
* getAllCustomers
* removeACustomer
* removeAllCustomers
* updateCustomerInfo
* deleteAccount

### **HOW TO INSTALL PROGRAM**

* Install git
* Click on this link https://github.com/AdewuyiDelighted/customer-management
* Clone the project by following the cloning process
* Get and connect mongoose uri
* Ensure all dependencies in the the above project are well injected in your package.json
* Ensure your project is on the right server.port
* Open your Post man Application,paste the accurate url on the given url space

### **ENDPOINT**

### **POST REGISTER REQUEST**

This endpoint is the first step a for first time user,it a process of onboarding into the application and getting there
necessary informations
Required field are:

* fullName
* Email
* password
* occupation
* defaultReminder
  Method:POST
  Content-Type:application/json

### **Response 1**

`status code 202 created
body
{
"data": response
"message": "Registration successful"
},
`

### **Response 2**

`status code 400 BadRequest
body
{
"data": {
"message": "User already exist"
}`

### **Response 3**

`status code 403 Forbidden
body
{
"data": {
"message": "User validation failed: email: Invalid Email""
}`

### **POST LOGIN REQUEST**

This is an endpoint that enable the user to have access to the application features,
in order to use the core functionality of the application
This endpoint required the user to be enter correct information that was enter when they register

Required field are:

* email
* password
  Method:POST
  Content-Type:application/json

### **Response 1**

`status code 202 created
body
{
{
"data": {
"message": "Login successful"
},
`

### **Response 2**

`status code 400 BadRequest
body
{
"data": {
"message": "Invalid details"
},
`

## **POST addCustomer**

This endpoint is used to add customer to the users list of customer in the application

Required field are:

* userEmail
* customerName
* customerEmail
* customerPhoneNumber
* customerDescription
* deadlineYear
* deadlineMonth
* deadlineDay

  Method:POST
  Content-Type:application/json

### **Response 1**

`status code 200 ok
body {
"data": {
"message": "New customer add successfully"
}`

### **Response 2**

`status code 400 Bad Request
body {
"data": {
"message": "User doesn't exist "
},
`

## **GET getACustomer **

This endpoint is used to get a customer detail among a lot of customers in their list

Required field are:

* userEmail
* customerName

Method:GET
Content-Type:application/json

### **Response 1**

`status code 200 ok
body {
"data": {
name,
email,
description"
}`

### **Response 2**

`status code 400 Bad Request
body {
"data": {
"message": "Customer doesn't exist"
},
`

## **GET getAllCustomers**

This end point enable user to get all their customers details  
Required field are:

* userEmail

Method:GET
Header: Content-Type:application/json

### **Response 1**

`status code 200 ok
body {
"data": {
list<Customers>
}
`

### **Response 2**

`status code 400 Bad Request
body {
"data": {
"message": "No Customer Available"
},
`

## **POST removeACustomer**

This endpoint is used by the user to remove a particular customer from the list of the user customers

Required field are:

* userEmail
* customerName

Method:POST
Header: Content-Type:application/json

### **Response 1**

`status code 200 ok
body {
{
"data": "Customer detail deleted successfully"
},
`

### **Response 2**

`status code 400 Bad Request
body {
"data": {
"message":"Customer doesn't exist"
},
`


## **POST removeAllCustomers**

This endpoint enable the user to delete the details of all the 
Required field

* userEmail

Method:POST
Header: Content-Type:application/json

### **Response 1**

`status code 200 ok
body {
{
"data": {
"message": "All customers details deleted successfully"
},
`

### **Response 2**

`status code 400 Bad Request
body {
"data": {
"message": "Customer doesn't exist"
},
`

## **POST deleteAccount**

This endpoint is enable used to delete the user account 

Required field

* userEmail

Method:POST
Header: Content-Type:application/json

### **Response 1**

`status code 200 ok
body {
{
"data": {
"message":"""Account deleted successfully"
`

### **Response 2**

`status code 400 Bad Request
body {
{
"data": {
"message":"Customer doesn't exist"
`


