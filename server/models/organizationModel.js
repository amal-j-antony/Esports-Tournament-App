const mongoose = require('mongoose')

const organizationSchema = new mongoose.Schema({
    oName: {
        type: String,
        required: true
    },
    oDescription: {
        type: String,
        default: ""
    },
    oLogo: {
        type: String,
        default: ''
    },
    oMembers: [
        {
            userID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "accounts",
                required: true
            },
            role: { type: String, default: "member" }
        }
    ],
    games: [
        {
            type: String,
            default: []
        }
    ],
    pendingJoin: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "accounts",
            required: true
        }
    ]

})

const organization = mongoose.model('organizations', organizationSchema)
module.exports = organization