const model = require('../model/model');

module.exports = {
    Pieces:{
        get: (req, res) =>{
            let name
            model.getata(name, (err, data)=>{
                res.send(data)
            } )
        }
    }

}