const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AuthSchema = new Schema({

    username: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model('auth', AuthSchema)