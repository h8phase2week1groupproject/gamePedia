const Route = require('express').Router()
const pokemonController = require('../controllers/apiPokemon')

Route.get('/pokemon', pokemonController.getPokemon)

module.exports = Route