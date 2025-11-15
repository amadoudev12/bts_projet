const express = require('express')
const createUser = require('../controllers/controller.utilisateur')
const router = express.Router()

router.post('/',createUser)
module.exports = router