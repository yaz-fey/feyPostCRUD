const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const database = () => {
    mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB Connected")
    }).catch((err) => {
        console.log(err)
    })

}

module.exports = database