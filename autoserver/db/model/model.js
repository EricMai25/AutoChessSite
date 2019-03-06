const db = require('../database/index');


const getData = (name, callback) =>{
    db.client.query(
        `SELECT * FROM pieces WHERE name = ${name}`,
        (err , data) =>{
            if(err) throw err;
            callback(null, data)
        }
    )
}

const postData = (table ,data, callback) =>{
    let string = data.join(`","`)
    db.client.query( `INSERT INTO ${table} VALUES  (${string})` ,
     (err, data)=>{
        if(err) throw err;
        callback(null, data)
    }
    )
}

module.exports={
    getData,
    postData
}