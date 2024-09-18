// src/pages/admin/AdminProductList.jsx

import React from 'react';

const AdminProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div className="admin-product-list">
      <h2>Liste des Produits</h2>
      {products.length === 0 ? (
        <p>Aucun produit disponible</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <div>
                <strong>Nom:</strong> {product.name} <br />
                <strong>Prix:</strong> {product.price} € <br />
                <strong>Quantité:</strong> {product.quantity} <br />
                <strong>Catégorie:</strong> {product.category}
              </div>
              <div>
                <button onClick={() => onEdit(product)}>Modifier</button>
                <button onClick={() => onDelete(product.id)}>Supprimer</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminProductList;
