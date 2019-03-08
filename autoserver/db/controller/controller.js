const model = require('../model/model');

module.exports = {
    Pieces:{
        get: (req, res) =>{
            let para = req.query
            let col = para.col || '*' , where = para.where || null, table = para.table, limit = para.limit || 'ALL';
            let condition = where ? `WHERE ${where}` : '' 
            console.log(req.query)
            model.getData(col, condition, table, limit, (err, data)=>{
                console.log('hello',data.rows)
                res.send(data.rows)
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