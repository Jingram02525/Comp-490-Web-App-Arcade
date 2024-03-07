const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
       host: "localhost",
        port: "3306",
        user: "root",
        password: '1234',
        database: "webgame",
})

db.connect((err) => {
    if(err) {
        console.error('Error connecting to MYSQL:', err)
    } else {
        console.log('Connected to MYSQL database:')
    }
})




const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/signup', (req, res) => {
    const { firstName } = req.body;

    console.log(req.body);

   //  Insert form data into the database
    db.query('INSERT INTO test (first) VALUES (?)',
       [firstName],
        (error, results) => {
            if (error) {
                console.error('Error inserting data:', error);
                return res.status(500).json({ error: 'An error occurred while processing your request.' });
            }
            res.status(200).json({ message: 'Form submitted successfully.' });
        });
});


//app.use(express.static(path.join(__dirname, 'public')));

/*app.post('/signup', (req, res) => {


    console.log('here');
    const { firstName } = req.body;

    // Insert form data into the database
    pool.query('INSERT INTO test (first) VALUES (?)',
        [firstName],
        (error, results) => {
            if (error) {
                console.error('Error inserting data:', error);
                return res.status(500).json({ error: 'An error occurred while processing your request.' });
            }
            res.status(200).json({ message: 'Form submitted successfully.' });
        });
});*/


//app.get('/', (req, res) => {
 //   return res.json("From Backend Side");
//})

//app.get('/users', (req, res) => {
 //   const sql = "SELECT * FROM com440.item";
 //   db.query(sql, (err, data) => {
  //      if(err) return res.json(err);
  //      return res.json(data);
 //   })
//})

// const db = mysql.createPool({
//     host: "localhost",
//     port: "3306",
//     user: "root",
//     password: '1234',
//     database: "webgame",

// });



//app.listen(8081, () =>{
//    console.log("listening");
//})