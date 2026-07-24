const mongoose = require("mongoose")

const DBconnectionString = process.env.DBconnectionString

mongoose.connect(DBconnectionString).then(res => {
    console.log("Connection successful");
    
}).catch(err =>  console.log("connection failed",err)
)