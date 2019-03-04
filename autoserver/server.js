const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./db/router/router')

const app = express()
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '../public')))
app.use('/pieces' , router)



app.listen(port , ()=>{
    console.log('connected on ' + port)
})