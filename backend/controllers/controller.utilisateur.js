const User = require('../models/model.utilisateur')
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Login = async (req,res) =>{
    try{
        const {login, password} = req.body
        const result = await User.getUserById({login})
        const utilisateur = result[0]
        console.log(utilisateur);
        if(!utilisateur){
            return res.status(404).json({message:'utilisateur introuvable'})
        }
        const hash = await bcrypt.compare(password, utilisateur.mot_passe)
        if(!hash){
            return res.status(404).json({message:'mot de passe incorrect'})
        }else{
            const token = jwt.sign(
                {id:utilisateur.id, nom:utilisateur.nom_utilisateur, prenom:utilisateur.prenom_utilisateur, login:utilisateur.login},
                process.env.Ma_Cle_Secret,
                {expiresIn:"7d"}
            )
            return res.status(201).json({message:'Bienvenue',utilisateur, token})
        }
    }catch(err){
        console.log(err);
        
        res.status(500).json({message:'erreur:',err})
    }
}

const CreateUser = async (req, res) => {
    try{
        const {nom_utilisateur, prenom_utilisateur, login, mot_passe} = req.body
        const exist = await User.getUserById({login})
        console.log(exist.length);
        if(exist.length !== 0){
            return res.json({message:'login deja utilisé'})
        }
        const saltRound = 10
        const hashedPassword = await bcrypt.hash(mot_passe, saltRound)
        const result = await User.CreateUser({nom_utilisateur, prenom_utilisateur, login, hashedPassword})
        res.status(200).json({message:'utilisateur cree avec succes', result})
    }catch(err){
        console.log(err);
        res.status(500).json({message:'erreur:', err})
    }
}
module.exports = {CreateUser, Login}