const Filiere = require('../models/model.filiere');


const getFilieres = async (req,res) => {
    try{
        const result = await Filiere.getFiliere()
        res.status(200).json({message:"liste des filieres",result})
    }catch(err){
        res.status(500).json({erreur:err})
    }
}
const getCountFilController = async (req, res) => {
    try{
        const result = await Filiere.getCount()
        res.status(200).json({result})
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}

module.exports = {getFilieres, getCountFilController}