const express = require("express")
const { registerController, loginController, googleAuthenticationController, getAllAccountsController } = require("../controllers/accountController")
const { testController } = require("../controllers/testController")
const jwtAuthMiddleware = require("../middleware/jwtAuthMiddleware")
const { authenticationController, jwtRefreshController, logoutController } = require("../controllers/authenticationiController")
const { createOrganizationController, getOrganizationByUserIDController, getAllOrganizationsController, reqJoinOrganizationController, cancelJoinOrganizationController, getOrganizationTournamentsController, getOrganizationByID_controller } = require("../controllers/organizationController")
const multerMiddleware = require("../middleware/multerMiddleware")
const { createTournamentController, getTournamentByIdController, updateTournamentStepOneController, updateTournamentStepTwoController, updateTournamentStepThreeController, updateTournamentStageFourController, updateTournamentStageFiveController, deleteTournamentController, getAllTournamentsController, updateTournamentStatusController } = require("../controllers/tournamentController")
const organizationMiddleware = require("../middleware/accessControlMiddleware")

const router = new express.Router()

router.get("/",(req,res)=>{
    res.status(200).send("Server is up and running")
})

router.post("/register",registerController)

router.post("/login",loginController)

router.post('/google-authentication',googleAuthenticationController)

router.get("/testRoute",jwtAuthMiddleware,testController)

router.get("/identity",jwtAuthMiddleware,authenticationController)

router.get("/refresh",jwtRefreshController)

router.get("/logout",logoutController)

router.get('/users',jwtAuthMiddleware,getAllAccountsController)

//organization
router.get('/getOrganization/:orgID',jwtAuthMiddleware,getOrganizationByID_controller)
router.post("/create-organization",jwtAuthMiddleware,multerMiddleware.single("oLogo"),createOrganizationController)
router.get('/getOrganizations',jwtAuthMiddleware,getAllOrganizationsController)
router.get('/getOrganizationByUser/:userID',jwtAuthMiddleware,getOrganizationByUserIDController)
router.post('/reqJoinOrganization',jwtAuthMiddleware,reqJoinOrganizationController)
router.put('/cancelJoinOrganization',jwtAuthMiddleware,cancelJoinOrganizationController)
router.get('/getOrgTournaments/:orgID',jwtAuthMiddleware,getOrganizationTournamentsController)

//tournament
router.get('/allTournaments',jwtAuthMiddleware,getAllTournamentsController)
router.post('/createTournament',jwtAuthMiddleware,multerMiddleware.single('image'),createTournamentController)
router.get('/tournament/:tID',jwtAuthMiddleware,getTournamentByIdController)
router.put('/updateTournamentStepOne',jwtAuthMiddleware,multerMiddleware.single('image'),updateTournamentStepOneController)
router.put('/updateTournamentStepTwo',jwtAuthMiddleware,updateTournamentStepTwoController)
router.put('/updateTournamentStepThree',jwtAuthMiddleware,updateTournamentStepThreeController)
router.put('/updateTournamentStepFour',jwtAuthMiddleware,updateTournamentStageFourController)
router.put('/updateTournamentStepFive',jwtAuthMiddleware,updateTournamentStageFiveController)
router.delete('/deleteTournament/:tID',jwtAuthMiddleware,organizationMiddleware,deleteTournamentController)
router.put('/updateTournamentStatus',jwtAuthMiddleware,updateTournamentStatusController)

module.exports = router