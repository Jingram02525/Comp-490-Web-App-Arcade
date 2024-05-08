
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

// API endpoint for registering a new user
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Insert user into the database
        const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
        const newUser = await pool.query(query, [username, email, password]);

        res.status(201).json({ message: "User created successfully"});
    } catch (error) {
        console.error('DB Error:', error.message);
        res.status(500).json({ error_message: "Internal server error" });
    }
});

module.exports = app;