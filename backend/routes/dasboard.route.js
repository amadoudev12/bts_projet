const express = require('express')
const verifyToken = require('../middleware/verifyToken')
const route = express.Router()

route.get('/',verifyToken, (req,res)=>{
    res.json({message:'bienvenue'})
})