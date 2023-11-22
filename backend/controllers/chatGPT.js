const audioPlay = require('audio-play');
const { Readable } = require('stream');
require("dotenv").config()
const axios = require('axios');

// Function to play audio using audio-play
function playAudio(audioData) {
  audioPlay(audioData);
}

console.log('checking123'); // This should appear in the console

const apiKey = process.env.OPENAI_API; // Replace with your OpenAI API key

const openaiEndpoint = 'https://api.openai.com/v1/engines/davinci/completions'; // Adjust the endpoint based on your OpenAI API version and requirements

async function getOpenAIResponse(prompt) {
  try {
    const response = await axios.post(
      openaiEndpoint,
      {
        prompt,
        max_tokens: 150, // Adjust based on your requirements
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    // Handle the response as needed
    console.log(response.data.choices[0].text);
  } catch (error) {
    console.error('Error calling OpenAI API:', error.message);
  }
}

// Example usage
const prompt = 'Translate the following English text to French: "{text}"';
getOpenAIResponse(prompt);

// console.log(openai, 'obento');


async function generateSpeechStream() {
  try {
    if (!openai) {
      throw new Error('OpenAI SDK is not properly initialized.');
    }

    console.log('OpenAI:', openai);

    const response = await openai.complete({
      engine: 'text-davinci-002',
      prompt: 'Say this in a natural way: Today is a wonderful day to build something people love!',
    });

    const audioData = response.data.choices[0].audio;

    return new Readable({
      read() {
        // Push the audio data to the stream
        this.push(audioData);
        this.push(null); // End the stream
      },
    });
  } catch (error) {
    throw new Error(`Error generating speech: ${error.message}`);
  }
}

async function generateSpeechAndStream(req, res) {
  try {
    const audioStream = await generateSpeechStream();
    res.setHeader('Content-Type', 'audio/mpeg'); // Set the appropriate content type
    audioStream.pipe(res); // Pipe the stream to the response
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
}

async function run() {
  try {
    await generateSpeechAndStream();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

run();

module.exports = {
  generateSpeechAndStream,
};
