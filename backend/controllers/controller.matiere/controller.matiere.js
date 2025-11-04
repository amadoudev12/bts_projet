const Matiere = require('../../models/model.matiere/model.matiere')

const getById = async (req, res) => {
    try{
        const id = req.params.id
        const result = await Matiere.getById(id)
        res.status(200).json(result.matieres)
    }catch(err){
        console.log(err);
    }
}

module.exports = {getById}