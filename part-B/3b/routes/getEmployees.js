const express = require("express")

const Employee = require("../models/Employee")

const router = express.Router();



router.get("/data", async (req, res) => {
    try{
        const employeeData = await Employee.find()
        if(employeeData.length){
            res.status(200).json(employeeData)
        }else{
            res.status(404)
        }
    }catch(e){
        console.log(e)
    }
})

module.exports = router;