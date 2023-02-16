const express = require("express")
const app = express()
const port = 3004

app.use("/", require("./routers/user"))
app.listen(port, () => {
    console.log(`server is listening on port http://localhost:${port}`)
})