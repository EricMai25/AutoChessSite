const db = require('../database/index');


const getData = (name, callback) =>{
    db.client.query(
        `SELECT * FROM pieces WHERE name = ${name}` ,
        (err , data) =>{
            if(err) throw err;
            callback(null, data)
        }
    )
}