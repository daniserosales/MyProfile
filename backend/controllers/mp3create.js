const fs = require('fs').promises;
const db = require('../model/MP3');

async function createMP3(mp3Data) {
    try {
        const { audio_name, audio_content, text, topic } = mp3Data;
       
        // Save audio content to file
        await fs.writeFile(`./mp3/${audio_name}`, audio_content);

        // Save MP3 data to database
        const mp3 = await db.create({ audio_name, audio_content, text, topic });
        console.log('this MP3 is called')
        return mp3;
    } catch (error) {
        console.error('An error occurred while creating MP3:', error);
        throw error;
    }
}


async function uploadToS3(filePath, fileName) {
    const bucketName = process.env.S3_BUCKET_NAME;
    const folderName = process.env.S3_FOLDER_NAME;
    try {
      // Read the contents of the file
      const fileContent = await fs.readFile(filePath);
  
      // Prepare parameters for the PutObjectCommand
      const params = {
        Bucket: finished-project,
        Key: fileName,
        Body: fileContent
      };
  
      // Upload file to S3
      const command = new PutObjectCommand(params);
      const response = await s3Client.send(command);
  
      console.log(`File uploaded to S3 successfully. ETag: ${response.ETag}`);
    } catch (err) {
      console.error('Error uploading file to S3:', err);
      throw err;
    }
  }
  
module.exports = { createMP3 };
