const express = require("express");
const cors = require("cors")
const logger = require('morgan');

const api = express()
const userRouter = require('./routers/userRoutes')
const tokenRouter = require ('./routers/tokenRoutes')

api.use(cors())
api.use(express.json())
console.log('bananaaaaa')

api.get("/",(req,res) => {
    res.status(200).json({ message: "API is running"})
})

api.use(cors());
api.use(express.json());
api.use(logger('dev'));

api.use("/user", userRouter);
api.use("/token", tokenRouter)


module.exports = api
