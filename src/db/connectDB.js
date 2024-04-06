const mongoose = require('mongoose')
const ConnectDB = (url) =>{
    return mongoose.connect(url,{
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
    })
};

module.exports = ConnectDB;
