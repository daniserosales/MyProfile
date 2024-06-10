require("dotenv").config()
const fs = require('fs');

const { generateStory } = require('./openAi');
const { generateAudio } =requie('./mp3create')

exports.generateStoryHandler = async (req, res) => {
    try {
      const { prompt, content } = req.body; // Extract prompt and content from the request

      const summary = await generateStory(prompt, content);
      console.log("Story generated", summary)
      res.status(200).send(summary);
    } catch (error) {
      res.status(500).send(`Error summarizing transcript: ${error.message}`);
    }
  };
