const express = require("express");
const cors = require("cors")
const logger = require("morgan")

const api = express()

api.use(cors())
api.use(express.json())
api.use(logger('dev'))

api.get("/",(req,res) => {
    res.json({ message: "API is running"})
})

module.exports = api
