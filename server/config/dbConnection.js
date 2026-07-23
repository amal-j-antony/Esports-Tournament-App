const mongoos = require("mongoose")

const DBconnectionString = process.env.DBconnectionString

mongoose.connect(DBconnectionString).then(res => {
    console.log("Connection successul");
    
}).catch(err =>  console.log(err)
)