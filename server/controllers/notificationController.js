
const notifications = require('../models/notificationModel')

exports.createNotificationController = (req,res) => {
    const nInput = req.body

    try {
        const result = await notifications.create(nInput)
        res.io.emit(result)
        res.status(200).json(result)
    } catch (error) {
        
    }
}