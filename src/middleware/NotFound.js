const NotFound = (res,req) =>{
    return res.status(404).send('Not Found')

}

module.exports = NotFound