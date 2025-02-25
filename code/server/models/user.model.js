const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        default:"user"
    },
    userAgent:{
        ip: {
            type: String
        },
        searchengine: {
            type: String
        },
        browser: {
            type: String
        },
        os: {
            type: String
        },
        device: {
            type: String
        },
    },
    requests: {
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
        address: {
            type: String
        },
        message: {
            type: String
        }
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
