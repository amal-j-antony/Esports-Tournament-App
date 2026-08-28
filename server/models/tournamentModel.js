const mongoose = require('mongoose')
const tournamentSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accounts',
        required: true
    },
    orgID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organizations',
        required: true
    },
    status: {
        type: String,
        default: 'Draft'
    },
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
            default: 8
        },
        minTeamCount: {
            type: Number,
            default: 4
        },
        gameFormat: {
            type: String,
            required: true
        },
        hostMode: {
            type: String,
            default: "Online"
        },

    },
    rules: [
        {
            type: String,
            default: []
        }

    ],
    enableRewards: {
        type: Boolean,
        default: false
    },
    rewards: [
        {
            position: {
                type: String,
                default: ""
            },
            reward: {
                type: String,
                default: ""
            },
            description: {
                type: String,
                default: ""
            },
        }
    ],
    stageInfo: [
        {
            stageName: {
                type: String,
                default: ""
            },
            groupCount: {
                type: Number,
                default: 1
            },
            stageType: {
                type: String,
                default: ""
            },
            stageFormat: {
                type: String,
                default: ""
            },
            roundsCount: {
                type: Number,
                default: 1
            },
            matchCount: {
                type: Number,
                default: 2
            },
            qualification: {
                type: String,
                default: ""
            }
        }
    ],
    socials: [
        {
            type: String,
            default: []
        }
    ],
    
    schedule: {
        registrationDate: { type: Date, default:Date.now },
        registrationCloseDate: { type: Date, default:Date.now },
        registrationTime: { type: String, default: "00:00:00"},
        registrationCloseTime: { type: String, default: "00:00:00"},
        startDate: { type: Date, default:Date.now },
        startTime: { type: String, default: "00:00:00"},
        checkIn: {type: Boolean,default: true},
        checkInMinutes: {type: Number, default:30}
    },
    

},
{
    timestamps: true
})

const tournament = mongoose.model('tournaments', tournamentSchema)
module.exports = tournament