import React, { useState, useEffect } from 'react';
import ClientProductList from './ClientProductList.jsx';

const ClientProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Normally, you'd fetch products from an API or global state here.
    // This is just to simulate a product list for the client-side.

    const initialProducts = [
      { id: 1, name: 'Produit A', price: 25.99, quantity: 10, category: 'Agriculture' },
      { id: 2, name: 'Produit B', price: 30.00, quantity: 5, category: 'Jardinage' },
      { id: 3, name: 'Produit C', price: 15.75, quantity: 20, category: 'Ferme' },
    ];

    setProducts(initialProducts); // You can replace this with API data fetch later.
  }, []);

  return (
    <div className="client-products-page">
      <h1>Nos Produits</h1>
      {/* Product List */}
      <ClientProductList products={products} />
    </div>
  );
};

export default ClientProductPage;
