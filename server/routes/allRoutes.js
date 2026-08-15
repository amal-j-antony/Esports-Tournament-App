const express = require("express")
const { registerController, loginController, googleAuthenticationController } = require("../controllers/accountController")
const { testController } = require("../controllers/testController")
const jwtAuthMiddleware = require("../middleware/jwtAuthMiddleware")
const { authenticationController, jwtRefreshController, logoutController } = require("../controllers/authenticationiController")
const { createOrganizationController, getOrganizationByIDController, getAllOrganizationsController, reqJoinOrganizationController, cancelJoinOrganizationController } = require("../controllers/organizationController")
const multerMiddleware = require("../middleware/multerMiddleware")

const router = new express.Router()

router.post("/register",registerController)

router.post("/login",loginController)

router.post('/google-authentication',googleAuthenticationController)

router.get("/testRoute",jwtAuthMiddleware,testController)

router.get("/identity",jwtAuthMiddleware,authenticationController)

router.get("/refresh",jwtRefreshController)

router.get("/logout",logoutController)

//organization
router.post("/create-organization",jwtAuthMiddleware,multerMiddleware.single("oLogo"),createOrganizationController)
router.get('/getOrganizations',jwtAuthMiddleware,getAllOrganizationsController)
router.get('/getOrganization/:userID',jwtAuthMiddleware,getOrganizationByIDController)
router.post('/reqJoinOrganization',jwtAuthMiddleware,reqJoinOrganizationController)
router.put('/cancelJoinOrganization',jwtAuthMiddleware,cancelJoinOrganizationController)

module.exports = router