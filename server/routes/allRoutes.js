const express = require("express")
const { registerController, loginController } = require("../controllers/accountController")
const { testController } = require("../controllers/testController")
const jwtAuthMiddleware = require("../middleware/jwtAuthMiddleware")
const { authenticationController, jwtRefreshController, logoutController } = require("../controllers/authenticationiController")

const router = new express.Router()

router.post("/register",registerController)

router.post("/login",loginController)

router.get("/testRoute",jwtAuthMiddleware,testController)

router.get("/identity",jwtAuthMiddleware,authenticationController)

router.get("/refresh",jwtRefreshController)

router.get("/logout",logoutController)

module.exports = router