// server/index.js
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agri_project',
    port: 4306
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Secret key for JWT
const jwtSecret = 'test';

// Route to handle user registration
app.post('/register', (req, res) => {
    const { username, email, password, name, surname, address, city, postal_code, phone } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        // SQL query to insert data into the table
        const query = `
            INSERT INTO users (username, email, password, name, surname, address, city, postal_code, phone)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(query, [username, email, hashedPassword, name, surname, address, city, postal_code, phone], (err, results) => {
            if (err) {
                console.error('Error inserting data into MySQL:', err);
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
});

// Route to handle user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // SQL query to find the user
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = results[0];

        // Compare password with the stored hashed password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }

            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            // Create a JWT token
            const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret, { expiresIn: '1h' });
            res.json({ message: 'Login successful', token });
        });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
