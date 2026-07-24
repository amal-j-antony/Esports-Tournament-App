const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "PLAYER"
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dwaaoyztz/image/upload/q_auto/v1783662948/copy_of_vecteezy_profile-icon-stock-vector-illustration_35112749_sw84ny.jpg"
    }
})