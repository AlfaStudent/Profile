const express = require("express")
const app = express()
const port = 3004
app.use("/", require("./routers/auths"))
app.listen(port, () => {
    console.log(`server is listening on port http://localhost:${port}`)
})