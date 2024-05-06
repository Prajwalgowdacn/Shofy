let mongoose = require('mongoose')
require ('dotenv').config()
let CONNECTION_STRING=process.env.CONNECTION_STRING;
exports.connect=()=>{
    mongoose.connect(CONNECTION_STRING)
        .then((result)=>{
            console.log("Connected")
        }).catch((err)=>{
            console.log('not connected');
            console.error(err)
        })
}