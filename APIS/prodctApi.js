//create mini express app
const exp = require("express")
const productApp = exp.Router()

productApp.get("/testproduct", (req, res) => {
    res.send({ message: "res from product api" })
})

//export
module.exports = productApp
