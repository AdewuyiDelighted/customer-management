require('dotenv').config();
const express = require('express')
const app = express();
const dburl = process.env.MONGO_URI
const ConnectDB = require('./src/db/connectDB')
const port = 3001
const router = require('./src/router/router')
const notFound = require('./src/middleware/NotFound')
const Customer = require("./src/model/Customer");
const User = require("./src/model/User");

ConnectDB(dburl)

app.use(express.json())
app.use('/api/user',router)
app.use(notFound)



ConnectDB(dburl)
    .then(()=>{
    app.listen(port,()=>{
        console.log("app is listening to ",port)

    })

}).catch((error)=>{
    console.log(error)
})