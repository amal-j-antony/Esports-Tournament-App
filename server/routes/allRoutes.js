const express = require("express")
const { registerController, loginController } = require("../controllers/accountController")

const router = new express.Router()

router.post("/register",registerController)

router.post("/login",loginController)


module.exports = router