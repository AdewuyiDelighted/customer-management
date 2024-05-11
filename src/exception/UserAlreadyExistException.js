class UserAlreadyExistException extends Error{
    constructor(message) {
        super(message);
    }
}

module.exports = UserAlreadyExistException
