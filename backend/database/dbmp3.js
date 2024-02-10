require("dotenv").config();
const path = require('path');
const fs = require('fs');
const db = require('./connectmp3');

async function setupMp3Tables() {
    try {
        const sqlMp3 = fs.readFileSync(path.join(__dirname, 'mp3.sql')).toString();
        
        await db.query(sqlMp3);
    } catch (error) {
        console.log(error);
    }
}

setupMp3Tables()
    .then(() => console.log("Set-up mp3 complete."))
    .catch(error => console.log(error));

console.log('jackfruit');