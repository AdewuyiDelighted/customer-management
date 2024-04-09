class NoCustomerException extends Error{
    constructor(message) {
        super(message);
    }
}

module.exports = NoCustomerException