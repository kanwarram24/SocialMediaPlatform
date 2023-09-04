const mongoose = require("mongoose")
class Database {

    constructor()
    {
        this.connect();
    }
    connect()
    {
        
mongoose.connect("mongodb://localhost:27017/SocialMediaPlatform")
.then(()=>{
    console.log("Database connection")
})
.catch(
    (err)=>{
        console.log("Database connection error",err)
    }
)

    }

}
module.exports = new Database();