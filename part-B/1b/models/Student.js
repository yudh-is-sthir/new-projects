const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  usn: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  subjects: [
    {
      sub: {
        type: String,
        required: true,
      },
      marks: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Student = mongoose.model("students", employeeSchema);

module.exports = Student;
