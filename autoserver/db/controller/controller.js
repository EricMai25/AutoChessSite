const model = require('../model/model');

module.exports = {
    Pieces:{
        get: (req, res) =>{
            let name
            model.getData(name, (err, data)=>{
                res.send(data)
            } )
        },
        post: (req,res) =>{
            let body = req.body, data = Object.values(body.data).join(","), table = body.table , col = Object.keys(body.data);
            model.postData(table, data, col, (err)=>{
                res.send(err)
            })
        }
    }

}