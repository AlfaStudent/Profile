const express = require("express")
const mongoose = require("mongoose")

const User = require("../models/user")
// const { checkout } = require("../register/router")

const route = express.Router()



route.post("/signup", async (req, res) => {
    const exist = User.findOne({email: req.body.email})
    if (exist) {
        return res.status(403).json("email existant deja")
    }
    const user = new User({
        userName: req.body.username,
        userName: req.body.name,
        email: req.body.email,
        password: req.body.password, 
    })
    try {
        await user.save()
        res.status(201).json("utilisateur créee")
    } catch(error) {
        res.status(500).json({message : "Erreur lors de l'enre"})

    }
    route.get("/login", (req, res) => {
        const {email, password} = req.body
        const existMail = User.findOne({email: email})
        const existPassword = User.findOne({password: password})
        if (!existMail || !existPassword) {
            res.send("Adresse mail ou mot de pass Incorect ")
        }
        res.send("vous etes bien connectés ")

    
    })
})
module.exports = route