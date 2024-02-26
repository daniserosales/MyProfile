const fs = require('fs').promises;

const db = require('./mp3');

async function createMP3(mp3Data) {
    try {
        const { audio_name, audio_content, text, topic } = mp3Data;
        
        // Save audio content to file
        await fs.writeFile(`./mp3/${audio_name}`, Buffer.from(audio_content));

        // Save MP3 data to database
        const mp3 = await db.create({ audio_name, text, topic });
        console.log('MP3 data saved successfully:', mp3);

        return mp3;
    } catch (error) {
        console.error('An error occurred while creating MP3:', error);
        throw error;
    }
}

module.exports = { createMP3 };
