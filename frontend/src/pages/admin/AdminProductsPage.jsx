// src/pages/admin/AdminProductsPage.jsx

import React, { useState } from 'react';
import AdminProductForm from './AdminProductForm';
import AdminProductList from './AdminProductList';

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // For editing a product

  // Add or update a product
  const handleSaveProduct = (product) => {
    if (editingProduct) {
      // Update existing product
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === editingProduct.id ? { ...product, id: editingProduct.id } : p
        )
      );
      setEditingProduct(null); // Clear editing product after saving
    } else {
      // Add new product
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...product, id: new Date().getTime() }, // Generate a unique id
      ]);
    }
  };

  // Handle product deletion
  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  // Handle editing a product
  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  return (
    <div className="admin-products-page">
      <h1>Gérer les Produits</h1>

      {/* Add/Edit Product Form */}
      <AdminProductForm onSave={handleSaveProduct} editingProduct={editingProduct} />

      {/* Product List */}
      <AdminProductList 
        products={products} 
        onDelete={handleDeleteProduct} 
        onEdit={handleEditProduct} 
      />
    </div>
  );
};

export default AdminProductsPage;
