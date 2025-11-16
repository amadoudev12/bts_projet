const db  = require('../config/db')

class User  {
    static async getUserById ({login}){
        try{
            const sql = "SELECT * FROM utilisateur WHERE login = ? "
            const result = await db.query(sql,[login])
            return result[0]
            // if(result[0].length>0){
            //     return {
            //         user: result[0],
            //         success: true
            //     }
            // }else{
            //     return {
            //         success: false
            //     }
            // }
        }catch(err){}
    }
    static async CreateUser ({nom_utilisateur, prenom_utilisateur, login, mot_passe}) {
        try{
            const sql = "INSERT INTO utilisateur (nom_utilisateur, prenom_utilisateur, login, mot_passe) VALUES (?, ?, ?, ?)"
            const user = await db.query(sql,[nom_utilisateur, prenom_utilisateur, login, mot_passe])
            return user[0]
        }catch(err){
            console.log(err);
            return err
        }
    }
}
module.exports = User