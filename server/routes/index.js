const Route = require('express').Router()
const userRoutes = require('./user')
const dotaRoutes = require('./dota')

Route.use('/users', userRoutes)
Route.use('/dota', dotaRoutes)

module.exports = Route