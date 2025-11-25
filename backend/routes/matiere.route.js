const express = require('express')
const { getById, getCountController } = require('../controllers/controller.matiere')
const route = express.Router()

route.get('/count',getCountController)
route.get('/:id',getById)
module.exports = route