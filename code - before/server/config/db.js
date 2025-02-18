const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.DB_URL).then(() => {
    console.log("CONNECTED TO THE DB")
})
module.exports = connect