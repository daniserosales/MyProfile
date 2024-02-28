const axios = require('axios');
const fetch = require('node-fetch');
const apiKey = process.env.OPENAI_API;
const fs = require('fs').promises; 
const db = require("./mp3")
const { createMP3 } = require("./mp3create");


async function generateStory(prompt, content) {

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          messages: [{ role: "user", content: prompt }, { role: "assistant", content: content }],
            model: "gpt-3.5-turbo-0613", 
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });

        const generatedText = response.data.choices[0].message.content.trim();
        console.log(generatedText, 'checking')
        return generatedText;


    } catch (error) {
      console.error("An error occurred:", error);
      return null;
    }
}

async function createSpeech(apiKey, text, word, topic) {
    try {
        const response = await fetch('https://api.openai.com/v1/audio/speech', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'tts-1',
                voice: 'alloy',
                input: text
            })
        });


        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        console.log(contentType,"this is contentType")
        if (contentType && contentType.includes('application/json')) {
            // Response is JSON, parse it
            const responseData = await response.json();
            console.log('Response data:', responseData);

            const { audioUrl } = responseData;
            console.log(audioUrl, "checking audioURL")
            // Handle audio URL...
            
        } else {
            // Response is not JSON, handle it differently
            const audioBuffer = await response.arrayBuffer();
            const audio_name = topic ? `${word}_${topic}.mp3` : `${word}.mp3`;

            const mp3Data = {
                audio_name: audio_name,
                audio_content: Buffer.from(audioBuffer),
                text: text,
                topic: topic,
                word: word // Assuming audioBuffer contains the audio content
            };
           
        
            // Call the MP3 controller to create and save MP3 data
            await createMP3(mp3Data);

            
            return audio_name;
        }
            
            console.log('Audio file saved successfully:', audio_name);
            return audio_name;
        
    } catch (error) {
        console.error("An error occurred:", error);
        throw error; 
    }
}


async function downloadAudio(url, filename) {
    const response = await fetch(url);
    const fileStream = fs.createWriteStream(filename);

    await new Promise((resolve, reject) => {
        response.body.pipe(fileStream);
        response.body.on("error", (err) => {
            reject(err);
        });
        fileStream.on("finish", function() {
            resolve();
        });
    });
}

// async function main() {
//     try {
//         const audioUrl = await createSpeech();
//         await downloadAudio(audioUrl, 'output.mp3');
//         console.log('Audio file downloaded successfully.');
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// main();

module.exports = {createSpeech, generateStory};
