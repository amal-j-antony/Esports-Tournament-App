const jwt = require('jsonwebtoken')
const accounts = require('../models/accountsModel')

exports.authenticationController = async (req, res) => {
    const userID = req.userID
    const userInfo = await accounts.findOne({ _id:userID})
    console.log(userInfo);

    const frontendPayload = {
        username: userInfo.username ,
        email: userInfo.email ,
        avatar: userInfo.avatar ,
        role: userInfo.role,
        userID
    }
    
    res.status(200).json({
        status: "authenticated",
        details: frontendPayload
    })
    console.log("Authentication completed");
    
}

exports.jwtRefreshController = (req, res) => {
    const refeshToken = req.cookies.refreshToken
    if (refeshToken) {
        const { userID, role } = jwt.verify(refeshToken, process.env.REFRESH_TOKEN_KEY)
        const newRefreshToken = jwt.sign({
            userID, role
        },
            process.env.REFRESH_TOKEN_KEY,
        )
        const newToken = jwt.sign({ userID, role }, process.env.JWT_KEY, { expiresIn: "15m" })
        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production"
                ? "None"
                : "Lax",
            maxAge: 1000 * 60 * 60 * 24
        })
        res.status(200).json({
            message: "generated",
            newToken
        })
    } else {
        res.status(401).json("401 Unauthorized")
    }
}

exports.logoutController = (req, res) => {
    res.clearCookie("refreshToken", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production"
                ? "None"
                : "Lax",
    })

    res.status(200).json("logout success")
}