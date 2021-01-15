const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = Router()

router.post('/register', async (req, res) => {
    try {
        const {login, password} = req.body
        const candidate = await User.findOne({ login })
        if (candidate) {
            return res.status(400).json({ message: 'Пользователь уже существует.' })
        }
        const hashedPassword = await bcrypt.hash(password, 2)
        const user = new User({ login, password: hashedPassword })
        await user.save()
        res.status(201).json({ message: 'Пользователь создан' })
    } catch (e){
        console.log(e)
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' })
    }
})

router.post('/login', async (req, res) => {
    try {
        const {login, password} = req.body
        console.log(req.body)
        const user = await User.findOne({ login })
        console.log(user)
        if (!user) {
            return res.status(400).json({message: 'Неверный логин или пароль.'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        console.log(isMatch)
        if (!isMatch){
            return res.status(400).json({message: 'Неверный логин или пароль.'})
        }
        const token = jwt.sign(
            { userId: user._id },
            config.get('jwtSecter'),
            { expiresIn: '1h' }
        )
        res.json({ token, userId: user._id })
    } catch (e){
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.' })
    }
})

module.exports = router
