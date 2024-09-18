// src/pages/client/ClientPurchaseForm.jsx
import React, { useState } from 'react';

const ClientPurchaseForm = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');

  const handlePurchase = (e) => {
    e.preventDefault();
    
    const purchaseDetails = {
      product: product.name,
      quantity,
      buyer: {
        name: buyerName,
        email: buyerEmail
      },
      totalPrice: product.price * quantity
    };

    console.log('Purchase details: ', purchaseDetails);
    alert(`Merci d'avoir acheté ${product.name}!`);

    // Here, you would normally send the purchase to a server or database
  };

  return (
    <form onSubmit={handlePurchase} className="purchase-form">
      <h3>Acheter {product.name}</h3>
      <div>
        <label>Nom:</label>
        <input type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} required />
      </div>
      <div>
        <label>Quantité:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" max={product.quantity} required />
      </div>
      <div>
        <strong>Total: {product.price * quantity} €</strong>
      </div>
      <button type="submit">Confirmer l'achat</button>
    </form>
  );
};

export default ClientPurchaseForm;
