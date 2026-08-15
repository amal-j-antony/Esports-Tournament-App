const mongoose = require('mongoose')
const tournamentData = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    banner: {
        type: String,
        default: ""
    },
    settings: {
        inviteOnly: {
            type: Boolean,
            default: false
        },
        maxTeamCount: {
            type: Number,
            req
        }
    }

})