delete require.cache[require.resolve('../../backend/controllers/words')];

require("dotenv").config()
const api = require ("./api")


console.log('pear')
app.listen(process.env.PORT, () => {
    console.log(`API listening on port ${process.env.PORT}...`);
})


module.exports = api;
