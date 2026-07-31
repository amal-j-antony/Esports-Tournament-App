
require("dotenv").config()

const express = require("express")

const cors = require("cors")

const router = require('./routes/allRoutes')

const server = express()

const cookieParser = require('cookie-parser')

require('./config/dbConnection')

server.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))

server.use(express.json())

server.use(cookieParser())

server.use(router)

const PORT = process.env.PORT

server.listen(PORT, ()=> {
    console.log(`Server started at ${PORT} `);
})