const db = require('../database/index');


const getData = (col, where, table, limit, callback) =>{
    console.log(`SELECT ${col} FROM ${table} ${where} LIMIT ${limit}`)
    db.client.query(
        `SELECT ${col} FROM ${table} ${where} LIMIT ${limit}`,
        (err , data) =>{
            if(err) throw err;
            callback(null, data)
        }
    )
}

const postData = (table ,data, col, callback) =>{
    let column = col.join(",")
    console.log(column , 'here')
    console.log(`INSERT INTO ${table}(${column}) VALUES (${data})`)
    db.client.query( `INSERT INTO ${table}(${column}) VALUES (${data})` ,
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