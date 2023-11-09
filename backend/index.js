
require("dotenv").config()
const api = require ("./api")


console.log('pear')
api.listen(process.env.PORT, () => {
    console.log(`API listening on port ${process.env.PORT}...`);
})


module.exports = api;
