const express = require("express");
const cors = require("cors")
const logger = require('morgan');

const api = express()

api.use(cors())
api.use(express.json())
console.log('bananaaaaa')

api.get("/",(req,res) => {
    res.status(200).json({ message: "API is running"})
})

api.use(cors());
api.use(express.json());
api.use(logger('dev'));

module.exports = api
