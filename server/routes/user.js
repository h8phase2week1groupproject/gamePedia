const Route = require('express').Router()
const userController = require('../controllers/userController')

Route.post('/login', userController.login)
Route.post('/register', userController.register)

module.exports = Route