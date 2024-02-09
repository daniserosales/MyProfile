require("dotenv").config();
const path = require('path');
const fs = require('fs');
const db = require('./connectmp3');


async function setupMp3Tables() {
    try {
        const sqlFilePath = path.join(__dirname, 'mp3.sql');

        // Check if the SQL file exists
        if (!fs.existsSync(sqlFilePath)) {
            throw new Error('SQL file not found.');
        }

        // Read SQL file content
        const sqlMp3 = fs.readFileSync(sqlFilePath, 'utf8');

        // Check if SQL content is empty
        if (!sqlMp3) {
            throw new Error('Empty SQL file.');
        }

        // Execute SQL query
        await db.query(sqlMp3);

        console.log('MP3 tables setup successful.');
    } catch (error) {
        console.error('Error setting up MP3 tables:', error);
    }
}

setupMp3Tables()
    .then(() => console.log("Set-up mp3 complete."))
    .catch(error => console.log(error));

console.log('banana');
