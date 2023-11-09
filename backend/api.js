const express = require("express");
const cors = require("cors")
const logger = require('morgan');
console.log("sushi")
const api = express()
const userRouter = require('./routers/userRoutes')
const tokenRouter = require ('./routers/tokenRoutes')
const wordRouter = require ('./routers/wordRoutes')
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
api.use("/word", wordRouter)


module.exports = api
