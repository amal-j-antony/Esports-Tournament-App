const { serverErrorLog } = require("../commonFuntions/errorLog")
const { findByIdAndUpdate } = require("../models/accountsModel")
const tournament = require("../models/tournamentModel")

exports.getTournamentByIdController = async (req, res) => {
    const { tID } = req.params
    try {
        const result = await tournament.findById(tID)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('Server error')
    }
}

exports.createTournamentController = async (req, res) => {
    const userID = req.userID
    const {
        name, game, description, orgID, gameFormat
    } = req.body
    const image = req.file
    const payload = {
        createdBy: userID,
        orgID,
        name,
        game,
        settings: {
            gameFormat
        }
    }
    if (description) {
        payload.description = description
    }
    if (image) {
        payload.image = image.filename
    }
    try {
        const result = await tournament.create(payload)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('Server error')
    }
}

exports.updateTournamentStepOneController = async (req, res) => {
    console.log('---update tournament data---');

    const { name, game, description, orgID, gameFormat, tID } = req.body
    const image = req.file
    const userID = req.userID
    const payload = {}
    if (name) {
        payload.name = name
    }
    if (game) {
        payload.game = game
    }
    if (description) {
        payload.description = description
    }
    if (image) {
        payload.image = image.filename
    }
    if (gameFormat) {
        payload.gameFormat = gameFormat
    }

    try {
        const result = await tournament.findByIdAndUpdate(tID, payload)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('server error')
    }
}

exports.updateTournamentStepTwoController = async (req, res) => {
    const {
        hostMode,
        settings: {
            inviteOnly, maxTeamCount, minTeamCount
        },
        stageInfo,
        tID
    } = req.body

    try {
        const result = await tournament.findByIdAndUpdate(tID, {
            stageInfo: stageInfo, hostMode: hostMode,
            $set: {
                "settings.inviteOnly": inviteOnly,
                "settings.maxTeamCount": maxTeamCount,
                "settings.minTeamCount": minTeamCount
            }

        }, { returnDocument: "after" })
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('server error')
    }
}

exports.updateTournamentStepThreeController = async (req, res) => {
    const { rules, tID } = req.body
    try {
        const result = await tournament.findByIdAndUpdate(tID, { $set: { rules } })
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('server error')
    }
}

exports.updateTournamentStageFourController = async (req, res) => {
    const { rewards, enableRewards, tID } = req.body
    try {
        const result = await tournament.findByIdAndUpdate(tID, { $set: { rewards, enableRewards } })
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('Server error')
    }
}

exports.updateTournamentStageFiveController = async (req, res) => {
    const {
        registrationDate,
        registrationCloseDate,
        registrationTime,
        registrationCloseTime,
        checkIn,
        checkInMinutes,
        startDate,
        startTime,
        tID
    } = req.body
    console.log('updateTournamentStageFiveController',req.body);
    

    try {
        const result = await tournament.findByIdAndUpdate(tID, {
            $set: {
                "schedule.registrationDate":registrationDate,
                "schedule.registrationCloseDate":registrationCloseDate,
                "schedule.registrationTime":registrationTime,
                "schedule.registrationCloseTime":registrationCloseTime,
                "schedule.checkIn":checkIn,
                "schedule.checkInMinutes":checkInMinutes,
                "schedule.startDate":startDate,
                "schedule.startTime":startTime,
            },            
        },{returnDocument: "after"})
console.log(result);

        res.status(200).json(result)
    } catch (error) {
        console.log({
            location: "updateTournamentStageFiveController", error
        });
        res.status(500).json("Something went wrong")
        
    }
}

exports.deleteTournamentController = async (req, res) => {
    const { tID } = req.params
    try {
        const result = await tournament.findByIdAndDelete({ _id: tID })
        res.status(200).json({
            result,
            tID
        })
    } catch (error) {
        console.log({
            controller: "deleteTournamentController",
            error
        });
        res.status(500).json('Server Error')
    }
}

exports.getAllTournamentsController = async (req,res) => {
    try {
        const result = await tournament.find()
        res.status(200).json(result)
    } catch (error) {
        console.log({
            location: "getAllTournamentsController",
            error
        });
        res.status(500).json('500 server error')
    }
}

exports.updateTournamentStatusController = async (req,res) => {
    const {status , tID} = req.body
    try {
        const result = await tournament.findByIdAndUpdate(tID,{status})
        res.status(200).json(result)
    } catch (error) {
        serverErrorLog('updateTournamentStatusController',error)
    }
}