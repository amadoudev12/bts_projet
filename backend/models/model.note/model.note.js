const db = require('../../config/db');

class Note {
    static async getNote (){
        try{
            const sql = "SELECT * FROM note";
            const [rows] = await db.query(sql);
            return rows;
        }catch(err){
            console.log(err);
        }
    }
    static async getNoteById (id){
        try{
            const sql = "SELECT matiere.nom_matiere, note.note,  matiere.coefficient FROM note LEFT JOIN matiere ON matiere.id_matiere = note.id_matiere WHERE id_etudiant = ?";
            const [rows] = await db.query(sql, [id]);
            return rows;
        }catch(err){
            console.log(err);
        }
    }
    static async Create(id,{note,id_matiere}){
        try{
            const sql = "INSERT INTO note (note,id_etudiant, id_matiere) VALUES (?, ?, ?)";
            const result = db.query(sql,[note,id, id_matiere]);
            return result;
        }catch(err){
            console.log(err);
        }
    }
    static async Delete(id){
        try{
            const sql = "DELETE note where id = ?";
            await db.query(sql,[id]);
        }catch(err){
            console.log(err);
        }
    }
    static async Edit(id,{note,id_etudiant,id_matiere}){
        try{
            const sql = "UPDATE note set note = ?, id_etudiant = ?, id_matiere = ?";
            const [result] = await db.query(sql,[id, note, id_etudiant, id_matiere]);
            return result;
        }catch(err){
            console.log(err);
        }
    }
}
module.exports = Note;