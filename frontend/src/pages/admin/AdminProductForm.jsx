// src/pages/admin/AdminProductForm.jsx

import React, { useState, useEffect } from 'react';

const AdminProductForm = ({ onSave, editingProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
    image: null,
  });

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct); // Populate the form for editing
    } else {
      setProduct({
        name: '',
        price: '',
        quantity: '',
        category: '',
        image: null,
      });
    }
  }, [editingProduct]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
    setProduct({
      name: '',
      price: '',
      quantity: '',
      category: '',
      image: null,
    });
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="admin-product-form">
      <div>
        <label>Nom du produit:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Prix (€):</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Quantité:</label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Catégorie:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Image du produit:</label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>

      <button type="submit">{editingProduct ? 'Modifier' : 'Ajouter'} Produit</button>
    </form>
  );
};

export default AdminProductForm;
