const express = require("express");

const router = express.Router();

const Student = require("../models/Student");

router.post("/add", async (req, res) => {
  const { usn, name, sub, marks } = req.body;
  console.log(req.body);

  try {
    const newStudent = new Student({
      usn,
      name,
      sub,
      marks,
    });
    await newStudent.save();
    console.log("Successfully Inserted");
    res.redirect("/");
  } catch (err) {
    console.log("Error in inserting", err);
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

module.exports = router;
