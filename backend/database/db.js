require("dotenv").config();
const path = require('path');
const fs = require('fs');
const db = require('./connect');

const sql = fs.readFileSync(path.join(__dirname, 'users.sql')).toString()


db.query(sql)
    .then(data => console.log("Set-up complete."))
    .catch(error => console.log(error));

console.log('banana')
