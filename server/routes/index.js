const Route = require('express').Router()
const userRoutes = require('./user')

Route.use('/users', userRoutes)

module.exports = Route