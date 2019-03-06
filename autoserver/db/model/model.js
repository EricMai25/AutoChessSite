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

const postData = (table ,data, col, callback) =>{
    let column = col.join(",")
    console.log(column)
    console.log(`INSERT INTO ${table}(${column})VALUES (${data})`)
    db.client.query( `INSERT INTO ${table}(${column})VALUES (${data})` ,
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