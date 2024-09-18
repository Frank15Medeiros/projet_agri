// src/pages/client/ClientProductList.jsx
import React, { useState } from 'react';
import ClientPurchaseForm from './ClientPurchaseForm';

const ClientProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="client-product-list">
      <h2>Liste des Produits</h2>
      {products.length === 0 ? (
        <p>Aucun produit disponible</p>
      ) : (
        <ul className="product-grid">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <div>
                <strong>Nom:</strong> {product.name} <br />
                <strong>Prix:</strong> {product.price} € <br />
                <strong>Quantité:</strong> {product.quantity} <br />
                <button onClick={() => handleBuyClick(product)}>Acheter</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedProduct && <ClientPurchaseForm product={selectedProduct} />}
    </div>
  );
};

export default ClientProductList;
