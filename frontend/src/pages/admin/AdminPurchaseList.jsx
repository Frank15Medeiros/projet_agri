// src/pages/admin/AdminPurchaseList.jsx
import React, { useState, useEffect } from 'react';

const AdminPurchaseList = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    // Fetch purchase data (for now, we'll use mock data)
    const mockPurchases = [
      { id: 1, buyerName: 'Jean Dupont', product: 'Produit A', quantity: 2, totalPrice: 51.98, status: 'Pending' },
      { id: 2, buyerName: 'Marie Durant', product: 'Produit B', quantity: 1, totalPrice: 30.00, status: 'Pending' },
    ];

    setPurchases(mockPurchases);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setPurchases(prevPurchases =>
      prevPurchases.map(purchase =>
        purchase.id === id ? { ...purchase, status: newStatus } : purchase
      )
    );
  };

  return (
    <div className="admin-purchase-list">
      <h2>Liste des Achats</h2>
      {purchases.length === 0 ? (
        <p>Aucun achat trouvé</p>
      ) : (
        <ul>
          {purchases.map(purchase => (
            <li key={purchase.id} className="purchase-item">
              <div>
                <strong>Acheteur:</strong> {purchase.buyerName} <br />
                <strong>Produit:</strong> {purchase.product} <br />
                <strong>Quantité:</strong> {purchase.quantity} <br />
                <strong>Total:</strong> {purchase.totalPrice} € <br />
                <strong>Status:</strong> {purchase.status}
                <div>
                  <button onClick={() => handleStatusChange(purchase.id, 'Approved')}>Approuver</button>
                  <button onClick={() => handleStatusChange(purchase.id, 'Rejected')}>Rejeter</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPurchaseList;
