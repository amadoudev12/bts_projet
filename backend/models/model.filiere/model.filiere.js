const db = require('../../config/db');


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
}

module.exports = Filiere