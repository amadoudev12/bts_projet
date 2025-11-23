const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
function verifyToken(req,res,next){
    const Ma_Cle_Secret = process.env.Ma_Cle_Secret
    const authHeader = req.headers['authorization'] //barear token
    //recuperation du token envoye dans le header
    const token = authHeader && authHeader.split(' ')[1]
    if(!token){
       return res.json({message:'acces refuses'})
    }
    try{
        const decoded = jwt.verify(token,Ma_Cle_Secret) //verifiation du token
        req.user = decoded
        next()
    }catch(err){
        res.status(403).json({message:'token invalide'})
    }
}
module.exports = verifyToken