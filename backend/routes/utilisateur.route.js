const express = require('express')
const {CreateUser, Login} = require('../controllers/controller.utilisateur')
const router = express.Router()
router.post('/login',Login)
router.post('/',CreateUser)
module.exports = router