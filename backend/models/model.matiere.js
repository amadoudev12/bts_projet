const db = require('../config/db')

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
    static async getCount (){
        try{
            const sql = "SELECT COUNT(*) AS total_mat FROM matiere"
            const [rows] = await db.query(sql);
            console.log(rows);
            return rows[0];
        }catch(err){
            console.log(err)
        }
    }
}
module.exports = Matiere