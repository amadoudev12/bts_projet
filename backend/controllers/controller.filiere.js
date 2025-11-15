const Filiere = require('../models/model.filiere');


const getFilieres = async (req,res) => {
    try{
        const result = await Filiere.getFiliere()
        res.status(200).json({message:"liste des filieres",result})
    }catch(err){
        res.status(500).json({erreur:err})
    }
}

module.exports = {getFilieres}