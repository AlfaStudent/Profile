const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    userName : {type : String, require : true},
    name : {type : String, require : true},
    email: {type : String, require: true},
    password: {type : String, require: true}
});
module.exports = mongoose.model('User', userShema);