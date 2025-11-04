const db = require('../../config/db')

class Matiere {
    static async getById(id){
        try{
            const sql = "SELECT * FROM matiere WHERE id_filiere = ?"
            const [rows] = await  db.query(sql,[id])
            return {
                matieres:rows
            }
        }catch(err){
            console.log(err);
            throw err
        }
    }
}
module.exports = Matiere