const Route = require('express').Router()
const dotaController = require('../controllers/apiDota')

Route.get('/heroes', dotaController.getsHero)

module.exports = Route