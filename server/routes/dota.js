const Route = require('express').Router()
const dotaController = require('../controllers/apiDota')
const authenticate = require('../middlewares/authenticate')

Route.get('/heroes', authenticate, dotaController.getsHero)

module.exports = Route