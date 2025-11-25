const express = require('express')
const { getFilieres, getCountFilController } = require('../controllers/controller.filiere')
const router = express.Router()


router.get('/',getFilieres)
router.get('/count',getCountFilController)
module.exports = router