const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const accounts = require("../models/accountsModel")

exports.registerController = async (req,res) => {
    console.log('Inside register function');
    console.log(req.body);
    const { username, email, password} = req.body
    
    const existingUser = await accounts.findOne({email})
    if(existingUser){
        res.status(409).json("Error: Account Exists")
    }else{
        const encryptedPw = await bcrypt.hash(password,10)
        const newUser = await accounts.create({
            username,
            email,
            password: encryptedPw

        })
        res.status(201).json(newUser)
    }
}

//login
exports.loginController = async(req,res) => {
    console.log('LoginController initialized');
    console.log(req.body);
    const {email, password} = req.body
    const existingUser = await accounts.findOne({email})
    if(existingUser){
        const comparisonResult = bcrypt.compare(password,existingUser.password)
        if(comparisonResult){
            const token = jwt.sign({usermail: email, role: existingUser.role},process.env.JWT_KEY)
            res.status(200).json({account: existingUser, token})
        }else{
            res.status(409).json("Invalid credentials")
        }
    }else{
        res.status(400).json("Account does not exist, please register")
    }
    
}