const express = require('express')
const {register,login,deneme} = require('../controllers/auth.js')
const router = express.Router()


router.post('/register', register)
router.post('/login', login)
router.get('/deneme',deneme)

module.exports = router