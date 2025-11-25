const Matiere = require('../models/model.matiere')

const getById = async (req, res) => {
    try{
        const id = req.params.id
        const result = await Matiere.getById(id)
        res.status(200).json(result.matieres)
    }catch(err){
        console.log(err);
    }
}
const getCountController = async (req, res) => {
    try{
        const result = await Matiere.getCount()
        res.status(200).json({result})
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}


module.exports = {getById, getCountController}