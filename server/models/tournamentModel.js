const mongoose = require('mongoose')
const tournamentData = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    }

})