// server/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: String,
    category: String,
    price: Number,
    quantity: Number,
    description: String
});

module.exports = mongoose.model('Product', productSchema);
