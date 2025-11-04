const express = require('express')
const { getById } = require('../../controllers/controller.matiere/controller.matiere')
const route = express.Router()


route.get('/:id',getById)
module.exports = route