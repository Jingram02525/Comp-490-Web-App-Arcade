const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get('/api', (req, res) => {
    res.json({message:"Hello world!"});
})

// const db = mysql.createConnection({
//        host: "localhost",
//         port: "3306",
//         user: "root",
//         password: '1234',
//         database: "webgame",
// })

// db.connect((err) => {
//     if(err) {
//         console.error('Error connecting to MYSQL:', err)
//     } else {
//         console.log('Connected to MYSQL database:')
//     }
// })





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.post('/signup', (req, res) => {
//     const { firstName } = req.body;

//     console.log(req.body);

//    //  Insert form data into the database
//     db.query('INSERT INTO test (first) VALUES (?)',
//        [firstName],
//         (error, results) => {
//             if (error) {
//                 console.error('Error inserting data:', error);
//                 return res.status(500).json({ error: 'An error occurred while processing your request.' });
//             }
//             res.status(200).json({ message: 'Form submitted successfully.' });
//         });
// });