const User = require('../models/model.utilisateur')

const CreateUser = async (req, res) => {
    try{
        const {nom_utilisateur, prenom_utilisateur, login, mot_passe} = req.body
        const result = await User.CreateUser({nom_utilisateur, prenom_utilisateur, login, mot_passe})
        res.status(200).json({message:'utilisateur cree avec succes', result})
    }catch(err){
        res.status(500).json({message:'erreur:', err})
    }
}
module.exports = CreateUser