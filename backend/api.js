const express = require("express");
const cors = require("cors")
const logger = require('morgan');
console.log("sushi")
const api = express()
const fullWordList = require("./words.json");
const userRouter = require('./routers/userRoutes')
const tokenRouter = require ('./routers/tokenRoutes')
const wordRouter = require ('./routers/wordRoutes')
// const audioRouter = require ('./routers/audioRoutes')
api.use(cors())
api.use(express.json())
console.log('bananaaaaa')
let words = [fullWordList]
api.use(express.json());

api.get("/",(req,res) => {
    res.status(200).json({ message: "API is running"})
})

api.use(logger('dev'));

api.use("/user", userRouter);
api.use("/token", tokenRouter)
api.use("/word", wordRouter)


api.get("/year1", (req, res) => {
    res.status(200).json({ words });
});

// api.use("/audio", audioRouter)


module.exports = api
