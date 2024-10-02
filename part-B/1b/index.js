const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const mongoose = require("mongoose")

const employeeRoute = require("./routes/studentRouter")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb://localhost:27017/university");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.use('/', employeeRoute);

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})

