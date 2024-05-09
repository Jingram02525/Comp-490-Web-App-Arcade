const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS if frontend is served from a different origin
app.use(express.json()); // Middleware to parse JSON

// Configure PostgreSQL connection
const pool = new Pool({
    connectionString: 'postgres://default:lhdrej2I0ctD@ep-misty-bonus-a4e8um1m.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require', 
    ssl: {
        rejectUnauthorized: false // Necessary if your Postgres server has SSL enabled
    }
});


app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (result.rows.length > 0) {
            const user = result.rows[0];

           
            if (password === user.password) {
               
                res.json({ message: "Login successful", username: user.username });
            } else {
                // Password does not match
                res.status(401).json({ error_message: "Invalid username or password" });
            }
        } else {
            // No user found with that username
            res.status(404).json({ error_message: "User not found" });
        }
    } catch (error) {
        console.error('Login Error:', error.message);
        res.status(500).json({ error_message: "Internal server error" });
    }
});
module.exports = app; 