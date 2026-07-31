const jwt = require("jsonwebtoken")

const jwtAuthMiddleware = (req, res, next) => {
    console.log('-----------------Middleware-------------');
    console.log(req.headers['authorization']);

    if (!req.headers["authorization"]) {
        res.status(401).json("No header set")
    } else {
        const accessToken = req.headers['authorization'].split(' ')[1]
        console.log({
            accessToken,
        });

        const userJWT = jwt.verify(accessToken, process.env.JWT_KEY)
        console.log(userJWT);


        if (userJWT) {
            req.userID = userJWT.userID
            req.role = userJWT.role
            next()
        } else {
            res.status(401).json("401 Unauthorized")
        }

    }


}

module.exports = jwtAuthMiddleware