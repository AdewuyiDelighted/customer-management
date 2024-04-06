class CustomerAlreadyExistException extends Error{
    constructor(message) {
        super(message);
    }
}

module.exports = CustomerAlreadyExistException