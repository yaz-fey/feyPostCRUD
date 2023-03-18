const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const authRouter = require('./routers/auth.js')
const postRouter = require('./routers/post.js')

dotenv.config()



const app = express()
app.use(cors())
app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))
app.use('/', authRouter)
app.use('/', postRouter)




const PORT = process.env.PORT || 8001



app.listen(PORT, () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB Connected")
    }).catch((err) => {
        console.log(err)
    })

    console.log(`Server is running on port ${PORT}`)
})