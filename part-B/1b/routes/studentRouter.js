const express = require("express");

const router = express.Router();

const Student = require("../models/Student");

router.post("/add", async (req, res) => {
  const { usn, name, sub, marks } = req.body;

  try {
    console.log(usn);
    let student = await Student.findOne({ usn: usn });
    console.log(student);
    if (student) {
      // Check if the subject already exists for the student
      const existingSubject = student.subjects.find(
        (subject) => subject.sub === sub
      );

      if (existingSubject) {
        // Update marks if the subject exists
        existingSubject.marks = marks;
        console.log(`Updated details of: ${usn}`);
      } else {
        // Add the new subject if it doesn't exist
        student.subjects.push({ sub, marks });
        console.log(`Added new subject for: ${usn}`);
      }
      await student.save();
    } else {
      student = new Student({
        usn,
        name,
        subjects: [{ sub, marks }],
      });

      await student.save();
      console.log("New student created with subject");
    }
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

router.get("/get", async (req, res) => {
  try {
    const students = await Student.find();
    if (!students.length) res.status(404).send("no students found");
    res.json(students);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:studentId/:studentSub", async (req, res) => {
  const { studentId, studentSub } = req.params;
  try {
    // Find the student by ID and remove the specific subject
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { $pull: { subjects: { sub: studentSub } } }, // $pull removes the subject with the specified sub code
      { new: true } // Return the updated document
    );
    if (updatedStudent) {
      res.status(200).json({ message: "Student subject deleted successfully" });
    } else {
      res.status(404).json({ message: "Student or subject not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting subject", error: error.message });
  }
});

module.exports = router;
