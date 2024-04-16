const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
//const PORT = 8000;
const WebSocket = require('ws');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

// db.connect((err) => {
//     if(err) {
//         console.error('Error connecting to MYSQL:', err)
//     } else {
//         console.log('Connected to MYSQL database:')
//     }
// })




// Create a WebSocket server instance
const wss = new WebSocket.Server({ port: 8080 }); // Set the port number to listen on

// Event listener for when a client connects to the server
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Event listener for when the server receives a message from a client
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);

    // Echo the received message back to the client
    ws.send(`Echo: ${message}`);
  });

  // Event listener for when the client disconnects from the server
  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});




const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/signup', (req, res) => {
    const { email, userName, firstName, lastName, password } = req.body;
    

    console.log(req.body);

    db.query('SELECT COUNT(*) AS count FROM account WHERE username = ?', [userName], (error, results) => {
        if (error) {
            console.error('Error checking username or email:', error);
            return res.status(500).json({ error: 'An error occurred while processing your request.' });
        }

        const { count } = results[0];
        if (count > 0) {
            // Username or email already exists, return an error message
            return res.status(400).json({ error: 'Username is already taken.' });
        }
    db.query('SELECT COUNT(*) AS count FROM account WHERE email = ?', [email], (error, results) => {
        if (error) {
                console.error('Error checking  email:', error);
                return res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
    
        const { count } = results[0];
        if (count > 0) {
                // Username or email already exists, return an error message
                return res.status(401).json({ error: 'email is already taken.' });
       }

    





   //  Insert form data into the database
    db.query('INSERT INTO account (email, username, firstname, lastname, pwd) VALUES (?, ?, ?, ?, ?)',
       [email, userName, firstName, lastName, password],
        (error, results) => {
            if (error) {
                console.error('Error inserting data:', error);
                return res.status(500).json({ error: 'An error occurred while processing your request.' });
            }
            res.status(200).json({ message: 'Form submitted successfully.' });
        });
});

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