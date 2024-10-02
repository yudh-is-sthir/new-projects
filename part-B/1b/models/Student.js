const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    usn: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    sub: {
        type: String,
        required: true,
    },
    marks: {
        type: Number,
        required: true,
    }
})

const Student = mongoose.model("student", employeeSchema)

module.exports = Student