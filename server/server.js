const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",    
    password: 'Lambda-3000',
    database: "com440",
})

db.connect((err) => {
    if(err) {
        console.error('Error connecting to MYSQL:', err)
    } else {
        console.log('Connected to MYSQL database:')
    }
})

app.get('/', (req, res) => {
    return res.json("From Backend Side");
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM com440.item";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

// const db = mysql.createPool({
//     host: "localhost",
//     port: "3306",
//     user: "root",
//     password: '1234',
//     database: "webgame",

// });



app.listen(8081, () =>{
    console.log("listening");
})