//create mini express app
const exp = require("express")
const userApp = exp.Router()

userApp.get("/testuser",(req,res)=>{
    res.send({message:"res from user api"})
})


//export
module.exports = userApp
