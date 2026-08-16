const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const accounts = require("../models/accountsModel")
const crypto = require("crypto")

exports.registerController = async (req, res) => {
    console.log('Inside register function');
    console.log(req.body);
    const { username, email, password } = req.body

    const existingUser = await accounts.findOne({ email })
    if (existingUser) {
        res.status(409).json("Error: Account Exists")
    } else {
        const encryptedPw = await bcrypt.hash(password, 10)
        const newUser = await accounts.create({
            username,
            email,
            password: encryptedPw

        })
        res.status(201).json(newUser)
    }
}

//login
exports.loginController = async (req, res) => {
    console.log('LoginController initialized');
    console.log(req.body);
    const { email, password } = req.body
    const existingUser = await accounts.findOne({ email })
    if (existingUser) {
        const comparisonResult = bcrypt.compare(password, existingUser.password)

        if (comparisonResult) {
            const refreshToken = jwt.sign(
                { role: existingUser.role, userID: existingUser._id },
                process.env.REFRESH_TOKEN_KEY,
            )

            const token = jwt.sign(
                { role: existingUser.role, userID: existingUser._id }
                , process.env.JWT_KEY,
                {
                    expiresIn: "30m"
                })

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" 
                        ? "None"
                        : "Lax",
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            const frontendPayload = {
                username: existingUser.username,
                email: existingUser.email,
                avatar: existingUser.avatar,
                role: existingUser.role,
                userID: existingUser._id
            }
            
            res.status(200).json({ account: frontendPayload, token })
        } else {
            res.status(409).json("Invalid credentials")
        }
    } else {
        res.status(400).json("Account does not exist, please register")
    }

}

exports.googleAuthenticationController = async (req,res) => {
    const {email,username,avatar} = req.body
    try {
        const findUser = await accounts.findOne({email})
        if(findUser){
            const token = jwt.sign(
                {role: findUser.role,
                    userID: findUser._id
                },
                process.env.JWT_KEY,
                {expiresIn: '30m'}
            )

            const refreshToken = jwt.sign(
                {role: findUser.role,
                    userID: findUser._id
                },
                process.env.REFRESH_TOKEN_KEY             
            )

            res.cookie("refreshToken",refreshToken,{
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: process.env.NODE_ENV === "production" ? "None" : "lax",
                    maxAge : 7 * 24 * 60 * 60 * 1000
                }
                
            )
            const frontendPayload = {
                username: findUser.username,
                email : findUser.email,
                role: findUser.role,
                userID: findUser._id,
                avatar: findUser.avatar
            }
            res.status(200).json({
                account: frontendPayload,
                token
            })
        }else{
            const password = await bcrypt.hash(process.env.GOOGLE_PASSKEY,10)
            const newUser = {
                username,
                password,
                email,
                avatar
            }
            const result = await accounts.create(newUser)
            console.log({
                origin: "googleAuthController/newUser",
                data: result
            });
            
            res.status(200).json(result)            
        }
    } catch (error) {
        console.log({
            origin: "googleAuthController/newUser",
            error
        });
        
        res.status(500).json('Server Error')
    }
}

exports.getAllAccountsController = async (req,res) => {
    try {
        const result = await accounts.find({role: {$ne: "ADMIN"}})
        res.status(200).json(result)
    } catch (error) {
        console.log({
            origin: "getAllUsers",
            error
        });
        
        res.status(500).json('Server Error')
    }
}