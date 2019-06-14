const Route = require('express').Router()
const ClashRoyaleController = require('../controllers/apiClashRoyale')
const authenticate = require('../middlewares/authenticate')

Route.get('/cards', authenticate, ClashRoyaleController.getsCard)

module.exports = Route