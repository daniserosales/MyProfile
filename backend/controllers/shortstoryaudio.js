require("dotenv").config();
const fs = require("fs");
const { createSpeech } = require('./openAi');
const apiKey = process.env.OPENAI_API;

async function audioEndpoint(req,res) {

    try {
        const {text}  = req.body;
        const audioUrl = await createSpeech(apiKey,text);
        console.log(audioUrl,'himiss')
        res.json({audioUrl})
        
    } catch (error) {
        res.status(500).json({"error": error.message})

    }

}

module.exports = audioEndpoint;
