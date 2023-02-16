const { application } = require("express")
const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()


router.post("/signup", (req, res) => {
    const {email, password} = req.body;
    const user = new User
    res.send("hello")
});

module.exports = router
