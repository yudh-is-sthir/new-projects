const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const employeeRoutes = require("./routes/employeeRoutes")
const getEmployees = require("./routes/getEmployees")

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb://localhost:27017/HR")

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.use("/", employeeRoutes)

app.use("/get", getEmployees)

app.listen(3000, () => {
    console.log("http://localhost:3000")
})