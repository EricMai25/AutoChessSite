const model = require('../model/model');

module.exports = {
    get: (req, res) =>{
        let name
        model.getata(name, (err, data)=>{
            res.send(data)
        } )
    }

}