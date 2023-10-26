const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: '1234',
    database: "webgame",

});



app.listen(3001, () =>{
    console.log("running on port 3001");
})