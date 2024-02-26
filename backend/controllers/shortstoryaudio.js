require("dotenv").config();
const fs = require("fs");
const { createSpeech } = require('./openAi');
const apiKey = process.env.OPENAI_API;

async function audioEndpoint(req,res) {

    try {
        const { text , topic, word} = req.body;
        console.log(text,'test')
       
        const audioUrl = await createSpeech(apiKey,text, topic, word);
        console.log(audioUrl,'himiss')
        
        res.json({audioUrl})
        
    } catch (error) {
        res.status(500).json({"error": error.message})

    }

}

module.exports = audioEndpoint;
