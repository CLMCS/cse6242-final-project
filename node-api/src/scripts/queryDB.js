const sqlite3 = require('sqlite3')
const path = require('path')


/**
 * return a Promise object 
 * - take in sql query sentence 
 * - query database
 * - then return query result in JSON format
 */


module.exports = async (sql) => {

    return new Promise((resolve, reject) => {

        const projectDB = path.join(__dirname, '../data/citation_score.db')
        const db = new sqlite3.Database(projectDB)
        
        db.all(sql, (err, rows) => {
            if (err) return err
            db.close()
            resolve(rows)
        })
    })


}