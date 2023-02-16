const mongoose = require("mongoose")


const option = {
   userNewUrlParser: true,
    userUnifiedTopology: true
}
const connect = () => mongoose
    .connect('mongodb://localhost:27017/myapp', option)
    .then(() => {
        console.log("connected to mongodb")
    }).catch((error) => {
        console.error("error to connecting to mongodb", error)
    });

