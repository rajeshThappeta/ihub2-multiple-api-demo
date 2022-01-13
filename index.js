const exp = require("express")
const app = exp()

//import apis
const userApp = require("./APIS/userApi")
const productApp = require("./APIS/prodctApi")

//if path starts with "users", forward req to userApp
app.use("/users", userApp)

//if path starts with "products", forward req to productApp
app.use("/products", productApp)



const mclient = require("mongodb").MongoClient
const dburl = "mongodb+srv://ihubb2:ihubb2@cluster0.rjvoz.mongodb.net/ihubb2db?retryWrites=true&w=majority"
//connect to db
mclient.connect(dburl, (err, dbclient) => {
    if (err) {
        console.log("err in db connect", err)
    }
    else {
        letdbobj = dbclient.db()
        console.log("db connection success")
    }
})

//assign port
app.listen(4000, () => console.log("server listening on port 4000..."))