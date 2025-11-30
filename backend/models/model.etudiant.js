const db = require('../config/db');
const { Uppercase } = require('../function/function');

class Etudiant { 
   static async getAll (){
      try{
         const sql = "SELECT * FROM etudiant LEFT JOIN filiere  ON filiere.id_filiere = etudiant.id_filiere"
         const [rows] = await db.query(sql)
         return rows
      }catch(err){
         console.log(err);
      }
   }
   static async  getStudent(id) {
      try {
         const sql = "SELECT * FROM etudiant LEFT JOIN filiere ON filiere.id_filiere = etudiant.id_filiere WHERE id_etudiant = ?";
         const studentNoteRequest = "SELECT note.note, matiere.coefficient FROM matiere LEFT JOIN note ON note.id_matiere = matiere.id_matiere WHERE id_etudiant = ?";
         const [noteStudent] = await db.query(studentNoteRequest,[id])
         const [result] = await db.query(sql, [id]);
         if(result.length === 0){
            return null
         }
         return {
            student : result[0],
            noteStudent: noteStudent
         };
      }catch(err) {
         console.log(err);
      }
   } 
   static async Create ({nom, prenom, date_naissance, sexe, id_filiere}) {
         const nomTab = nom.split('')
         const prenomTab = prenom.split('')
         //const date_tab = date_naissance.split('')
         const identifiant = `${nomTab.slice(0,3).join('')}${prenomTab.slice(0,1)}${date_naissance}0001`
         const identifiantP = Uppercase(identifiant)

        try{
         const sql = "INSERT INTO etudiant (id_etudiant, nom, prenom, date_naissance, sexe, id_filiere) VALUES (?, ?, ?, ?, ?, ?)"
         const [result] = await db.query(sql,[identifiantP, nom, prenom, date_naissance, sexe, id_filiere])
         return result
        }catch(err){
            console.log(err);
        }
   }

   static async Delete(id){
      try{
         const sql = "DELETE  FROM etudiant WHERE id_etudiant = ? "
         const [result] = await db.query(sql,[id])
         return result
      }catch(err){
         console.log(err);
         
      }
   }

   static async Edit (id,{nom, prenom, date_naissance, sexe, id_filiere}){
      try{
         const sql = "UPDATE  etudiant set nom = ? , prenom = ? , date_naissance = ?, sexe = ? , id_filiere = ? WHERE id_etudiant = ?"

         const [result] = await db.query(sql, [nom, prenom, date_naissance, sexe, id_filiere, id])

         return result
      }catch(err){
         console.log(err);
      }
   }
   static async AddMoy(id, moy){
      try{
         const sql = "UPDATE  etudiant set moyenne = ? WHERE id_etudiant = ?"
         const [result] = await db.query(sql, [id,moy])
         return result
      }catch(err){
         console.log(err);
      }
   }
   static async studentCount () {
      try {
         const sql = "SELECT COUNT(*) AS total FROM etudiant";
         const [rows] = await db.query(sql);
         console.log(rows);
         return rows[0]; 
      } catch (err) {
         console.log(err);
         return err;
      }
   }
}


module.exports = Etudiant