const express  = require("express")
const app = express();
const port = 5000;
const middleware = require("./middleware")
const path = require('path')
const bodyParser = require("body-parser");
const mongoose =require('./database')

const server = app.listen(port,()=>console.log("Server started on port:",port))

app.set("view engine","pug")
app.set("views","views");

app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(express.static(path.join(__dirname,"public")))

// Routes
const registerRoute = require('./routes/registerRoutes');
const loginRoute = require("./routes/loginRoutes");

app.use("/login",loginRoute);
app.use("/register",registerRoute)
app.use(bodyParser.urlencoded({
    extended:false
}))

app.get("/", middleware.requireLogin,(req,res)=>{

    var payload = {
        pageTitle:"Home"
    }
    res.status(200).render("home",payload)
})