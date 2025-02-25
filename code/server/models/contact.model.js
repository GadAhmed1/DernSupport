const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    message: {
        type: String
    }

});

const Contact = mongoose.model('Contact', modelSchema);
module.exports = Contact;
