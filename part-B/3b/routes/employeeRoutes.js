const express = require("express")

const router = express.Router()

const Employee = require("../models/Employee")

router.post("/add", async(req, res) => {
    console.log(req.body)
    const {name, email, phone, hDate, title, salary} =  req.body

    try{
        const newEmployee = new Employee({
            name, email, phone, hDate, title, salary
        })
        const data = await newEmployee.save();
        if(data){
            console.log("Student Added")
        }
        res.redirect("/")
    }catch(err){
        console.log(err)
    }
})

module.exports = router