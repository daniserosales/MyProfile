
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
(async () => {
    try {
        await setupMp3Tables();
        console.log("Set-up mp3 complete.")
    } catch (error) {
        // Handle any uncaught errors here, e.g., log to file, notify admin, etc.
        console.error("An unexpected error occurred:", error);
    }
})();

console.log('jackfruit');
