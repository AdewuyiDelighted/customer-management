const NotFound = (res,req,next) =>{
    next()
    return res.status(404).send('Not Found')

}

module.exports = NotFound
