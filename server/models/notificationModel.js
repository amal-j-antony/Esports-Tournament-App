const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    sender: { type: String, required: true},
    recipients: { type: Array, required: true},
    message: {type:String,required: true},
    nType: {type: String, required: true}
})

const notifications = mongoose.model('notifications',notificationSchema)
module.exports = notifications