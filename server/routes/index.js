const Route = require('express').Router()
const userRoutes = require('./user')
const dotaRoutes = require('./dota')
const pokemonRoutes = require('./pokemon')

Route.use('/users', userRoutes)
Route.use('/dota', dotaRoutes)
Route.use('/pokeapi', pokemonRoutes)

module.exports = Route