const db = require('../config/db');


class Filiere {
    static async getFiliere () {
        try {
            const sql = "SELECT * FROM filiere";
            const [rows] = await db.query(sql);
            return rows;
        }catch(err){
            console.log(err);
        }
    }
    static async getCount (){
        try{
                const sql = "SELECT COUNT(*) AS total_filiere FROM filiere"
                const [rows] = await db.query(sql);
                console.log(rows);
                return rows[0];
        }catch(err){
                console.log(err)
            }
        }
}

module.exports = Filiere