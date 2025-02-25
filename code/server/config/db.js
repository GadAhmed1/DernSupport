const mongoose = require('mongoose');
require('dotenv').config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log("---- START The DB ----");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

connect();

module.exports = connect;
