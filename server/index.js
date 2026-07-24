
require("dotenv")

const express = require("express")

const cors = require("cors")

const router = require('./routes/allRoutes')

const server = express()

require('./config/dbConnection')

server.use(cors())

server.use(express.json())

server.use(router)

const port = process.env.PORT

server.listen(PORT, ()=> {
    console.log(`Server started at ${PORT} `);
})