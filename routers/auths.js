const express = require("express")
const mongoose = require("mongoose")
const {check, validationResult} = require("express-validator")
const User = require("../models/user")
// const { checkout } = require("../register/router")

const route = express.Router()

const exist = User.findOne({email: req.body.email})

route.post("/signup", (req, res) => {
    if (exist) {
        return res.status(403).json("email existant deja")
    }
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    



    
})