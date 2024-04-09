const mongoose = require('mongoose')
const Schema = mongoose.Schema


const deadlineSchema = new Schema({

    deadlineDate: {
        type: String
    },
    deadLineMonth: {
        type: String
    },
    deadLineYear: {
        type: String
    }
})

const DeadlineDate = mongoose.model("DeadlineDate",deadlineSchema)
module.exports = DeadlineDate