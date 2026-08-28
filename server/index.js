const http = require('http')
const {Server} = require('socket.io')
require("dotenv").config()
const setupSocket = require('./services/socket')

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

const socketServer = http.createServer(server)

const io = new Server (socketServer, {
    cors: {
        origin: process.env.ORIGIN,
        credentials: false
    }
})

setupSocket(io)

server.use((req,res,next)=>{
    req.io = io
    next()
})

server.use(express.static('uploads'))


const PORT = process.env.PORT

socketServer.listen(PORT, ()=> {
    console.log(`Server started at ${PORT} `);
})