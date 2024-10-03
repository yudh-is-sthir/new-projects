const mongoose = require("mongoose")
const { emitWarning } = require("process")

const employeeSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    hDate: {type: Date, required: true},
    title: {type: String, required: true},
    salary: {type: Number, required: true},
})

const Employee = mongoose.model("/employees", employeeSchema)

module.exports = Employee;