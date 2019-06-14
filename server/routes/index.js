const Route = require('express').Router()
const userRoutes = require('./user')
const dotaRoutes = require('./dota')
const pokemonRoutes = require('./pokemon')
const mobileLegendRoutes = require('./mobileLegend')
const clashRoyaleRoutes = require('./clashRoyale')

Route.use('/users', userRoutes)
Route.use('/dota', dotaRoutes)
Route.use('/pokeapi', pokemonRoutes)
Route.use('/mobileLegend', mobileLegendRoutes)
Route.use('/clashRoyale', clashRoyaleRoutes)

module.exports = Route