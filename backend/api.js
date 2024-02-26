const express = require("express");
const cors = require("cors")
const logger = require('morgan');
console.log("sushi")
const api = express()

const userRouter = require('./routers/userRoutes')
const tokenRouter = require ('./routers/tokenRoutes')
const wordRouter = require ('./routers/wordRoutes')
const mp3Router = require ('./routers/mp3Routes')
const yearRouter = require('./routers/yearRoutes')
// const audioRouter = require ('./routers/audioRoutes')
api.use(cors())
api.use(express.json())
console.log('bananaaaaa')

api.use(express.json());

api.get("/",(req,res) => {
    res.status(200).json({ message: "API is running"})
})

api.use(logger('dev'));
api.use("/year", yearRouter);
api.use("/user", userRouter);
api.use("/token", tokenRouter)
api.use("/word", wordRouter)
api.use("/mp3", mp3Router)


// api.get("/year1", (req, res) => {
//     res.status(200).json({ words });
// });

// api.use("/audio", audioRouter)


module.exports = api
