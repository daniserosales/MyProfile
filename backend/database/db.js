require("dotenv").config();
const path = require('path');
const fs = require('fs');
const db = require('./connect');

async function setupTables() {
    try {
        const sqlUsers = fs.readFileSync(path.join(__dirname, 'users.sql')).toString();
        const sqlWords = fs.readFileSync(path.join(__dirname, 'spelling.sql')).toString();
        
        await db.query(sqlUsers);
        await db.query(sqlWords);
    } catch (error) {
        console.log(error);
    }
}

setupTables()
    .then(() => console.log("Set-up complete."))
    .catch(error => console.log(error));

console.log('banana');
