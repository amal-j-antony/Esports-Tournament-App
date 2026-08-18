const organization = require("../models/organizationModel");
const tournament = require("../models/tournamentModel");

const organizationMiddleware = async (req,res,next) => {
    const {tID} = req.params
    const authorizedRoles = ['Leader',"CoLeader",'Organizer']
    console.log('----org access control-------');
    const userID = req.userID
    try {
        const result = await organization.findOne({"oMembers.userID": userID})
        const tournamentData = await tournament.findById({_id:tID})
        const userDetails = result.oMembers.find(item => item.userID == userID)
        console.log({
            tournamentData,
            result,
            userID,
            userDetails
        });
        
        if(authorizedRoles.includes(userDetails.role) &&  tournamentData.orgID.equals(result._id)){
            next()
        }
        else res.status(400).json({userDetails})
    } catch (error) {
        console.log({
            controller:"organizationMiddleware",
            error
        });
        res.status(500).json('Server error')
    }
}

module.exports = organizationMiddleware