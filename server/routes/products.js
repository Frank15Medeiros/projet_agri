// server/routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Product model

// POST endpoint to add a new product
router.post('/addProduct', async (req, res) => {
    const { productName, category, price, quantity, description } = req.body;
    try {
        const newProduct = new Product({
            productName,
            category,
            price,
            quantity,
            description
        });

        await newProduct.save(); // Save product to DB
        res.status(201).json({ message: 'Product added successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
});

module.exports = router;
