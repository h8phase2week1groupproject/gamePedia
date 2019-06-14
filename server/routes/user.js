const Route = require('express').Router()
const userController = require('../controllers/userController')
const googleController = require('../controllers/googleSignIn')

Route.post('/login', userController.login)
Route.post('/register', userController.register)
Route.post('/googleSignIn', googleController.loginFromGoogle)

module.exports = Route