const express = require('express')
const { getFilieres } = require('../../controllers/controller.filiere/controller.filiere')
const router = express.Router()


router.get('/',getFilieres)
module.exports = router