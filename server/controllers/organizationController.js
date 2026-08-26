const { default: mongoose } = require("mongoose");
const organization = require("../models/organizationModel");
const { findOneAndDelete, findOneAndUpdate } = require("../models/accountsModel");
const tournament = require("../models/tournamentModel");

exports.createOrganizationController = async (req, res) => {
    console.log('create org=========');
    console.log(req.body);
    console.log(req.file);
    const userID = req.userID
    const orgData = {
        oName: req.body.oName,
        oDescription: req.body.oDescription,
        oLogo: req.file.filename,
        oMembers: [{
            userID,
            role: "Owner"
        }]
    }
    try {
        const exists = await organization.findOne({ "oMembers.userID": userID })
        console.log(exists);

        if (exists) {
            res.status(409).json("User is already in an organiation")
        } else {
            const result = await organization.create(orgData)
            res.status(200).json(result)
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status: "error",
            message: error.message
        })
    }
}

exports.getOrganizationByUserIDController = async (req, res) => {
    console.log('-------getORG----------');

    const { userID } = req.params
    console.log(mongoose.isValidObjectId(userID));

    try {
        const result = await organization
            .findOne({ "oMembers.userID": userID })
            .populate("oMembers.userID", "username")
        console.log('org',result);
        
        res.status(200).json(result)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status: "error",
            message: error.message
        })
    }
}

exports.getAllOrganizationsController = async (req, res) => {
    console.log('---get all orgs---');
    const userID = req.userID
    const user_ID = new mongoose.Types.ObjectId(userID)
    try {
        const result = await organization.find()
        console.log(result);

        res.status(200).json(result)
    } catch (error) {
        console.log('getOrg error', error);
        res.status(500).json('500 Server error')
    }

}

exports.reqJoinOrganizationController = async (req, res) => {
    console.log('---req join org---');
    console.log(req.body);

    const { orgID } = req.body
    const userID = req.userID
    try {
        const result = await organization.findOneAndUpdate(
            {
                _id: orgID,
                pendingJoin: { $ne: userID }
            },
            {
                $push: { pendingJoin: userID }
            },
            {
                returnDocument: "after"
            }
        )
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('Server error')
    }
}

exports.cancelJoinOrganizationController = async (req, res) => {
    const { orgID } = req.body
    const userID = req.userID
    try {
        const result = await organization.findOneAndUpdate({
            _id: orgID,
            pendingJoin: userID
        },
            {
                $pull: { pendingJoin: userID }
            },
            {
                returnDocument: "after"
            })
            res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('server error')
    }
}

exports.getOrganizationTournamentsController = async (req,res) => {
    const {orgID} = req.params
    try {
        const result = await tournament.find({orgID})
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('server error')
    }
}

exports.getOrganizationByID_controller = async (req,res) => {
    const {orgID} = req.params
    try {
        const result = await organization.findById(orgID)
        res.status(200).json(result)
    }catch(error) {
        console.log({
            location: "getOrganizationByID_controller",
            error
        });
        res.status(500).json('500 server error')
    }
}