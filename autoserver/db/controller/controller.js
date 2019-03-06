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
            console.log(req.body)
            let data, table;
            // model.postData(table, data, (err)=>{
            //     res.send(err)
            // })
        }
    }

}