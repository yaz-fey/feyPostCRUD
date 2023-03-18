
const AuthSchema = require('../models/auth.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')




const register = async (req, res) => {
    try {

        const { username, password, email } = req.body


        console.log('register', username, password,  email)

        const user = await AuthSchema.findOne({ email })
        console.log('register3', user)
        if (user) {
            return res.status(400).json({ message: 'Böyle bir kullanıcı zaten var.' })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: 'Lütfen 6 karakter olmalıdır.' })
        }

        if (!username || !password || !email) {
            return res.status(400).json({ message: 'Lütfen bilgileri giriniz.' })
        }

        const passwordHash = await bcrypt.hash(password, 12);

        if(!isEmail(email)){
            return res.status(400).json({ message: 'Lütfen geçerli bir email girin' })
        }
        console.log('register2', username, password,  email)
        const newUser = await AuthSchema.create({
            username,
            password:passwordHash,
            email
        })

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        return res.status(201).json({status:"OK",newUser,token, message: 'User created' })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await AuthSchema.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'Böyle bir kullanıcı bulunamadı.' })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            console.log("parola yanlışşşş")
            return res.status(400).json({ message: 'Gelen şifre geçersiz...' })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })
        return res.status(200).json({status:"OK",user,token, message: 'Kullanıcı giriş yaptı.' })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
const deneme = async (req, res) => {
    return res.status(200).json({ message: 'deneme' })
}
function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

   else 
    return false; 
}

module.exports = {
    register,
    login,
    deneme
}