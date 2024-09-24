import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

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

// Add product route - Handles product information (no image)
app.post('/add-product', (req, res) => {
    const { name, category, quantity, unit, price, description } = req.body;

    // Validation: Check that all fields are provided
    if (!name || !category || quantity === undefined || !unit || !price || !description) {
        return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
    }

    // SQL query to insert product data into the products table
    const query = `
        INSERT INTO products (name, category, quantity, unit, price, description)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [name, category, quantity, unit, price, description], (err, results) => {
        if (err) {
            console.error('Error inserting product into MySQL:', err);
            return res.status(500).json({ error: 'Erreur de base de données' });
        }
        res.status(201).json({ message: 'Produit ajouté avec succès' });
    });
});

// Route to get all products
app.get('/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Erreur de base de données' });
        }
        res.status(200).json(results);
    });
});

// Route to update a product
app.put('/update-product/:id', (req, res) => {
    const { id } = req.params;
    const { name, category, quantity, unit, price, description } = req.body;

    const query = `
        UPDATE products 
        SET name = ?, category = ?, quantity = ?, unit = ?, price = ?, description = ?
        WHERE id = ?
    `;
    db.query(query, [name, category, quantity, unit, price, description, id], (err, results) => {
        if (err) {
            console.error('Error updating product:', err);
            return res.status(500).json({ error: 'Erreur de base de données' });
        }
        res.status(200).json({ message: 'Produit mis à jour avec succès' });
    });
});

// Route to delete a product
app.delete('/delete-product/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM products WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting product:', err);
            return res.status(500).json({ error: 'Erreur de base de données' });
        }
        res.status(200).json({ message: 'Produit supprimé avec succès' });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
