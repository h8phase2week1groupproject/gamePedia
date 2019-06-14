const Route = require('express').Router()
const mobileLegendController = require('../controllers/apiMobileLegend')
const authenticate = require('../middlewares/authenticate')

Route.get('/heroes', authenticate, mobileLegendController.getsHero)

module.exports = Route