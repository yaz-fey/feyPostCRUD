const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    user: {
        type: String,
        require:true,
        trim: true
    },
    title: {
        type: String,
        require:true,
        trim: true
    },
    description: {
        type: String,
        require:true,
        trim: true
    },
    date: {
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model('post', PostSchema)