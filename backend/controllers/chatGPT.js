const openai = require('openai');
const audioPlay = require('audio-play');
const { Readable } = require('stream');

// Initialize OpenAI client
const openaiClient = new openai({
  apiKey: process.env.OPENAI_API,
});

// Function to play audio using audio-play
function playAudio(audioData) {
  audioPlay(audioData);
}

console.log('checking123'); // This should appear in the console
console.log(openai,'obento')
async function generateSpeechStream() {
  try {
    if (!openai || !openai.Completions) {
      throw new Error('OpenAI SDK is not properly initialized.');
      
    }
    console.log('OpenAI:', openai.Completions);
    console.log(openai, 'horseshoes');

    const response = await openai.Completions.create('audio/speech', {
      model: 'tts-1',
      voice: 'alloy',
      input: 'Today is a wonderful day to build something people love!',
    });

    const audioData = response.data.audio;

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
    const audioStream = generateSpeechStream();
    res.setHeader('Content-Type', 'audio/mpeg'); // Set the appropriate content type
    audioStream.pipe(res); // Pipe the stream to the response
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
}

async function run() {
  await generateSpeechAndStream();
}

run();

module.exports = {
  generateSpeechAndStream,
};
