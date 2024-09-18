import React from 'react';

const Catalogue = ({ products }) => {
    // Group products by category
    const groupedProducts = products.reduce((acc, product) => {
        const { category } = product;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    return (
        <div className="catalogue">
            <h2>Catalogue des Produits</h2>
            {Object.keys(groupedProducts).length > 0 ? (
                Object.keys(groupedProducts).map((category, index) => (
                    <div key={index} className="category">
                        <h3>{category}</h3>
                        <ul className="product-list">
                            {groupedProducts[category].map((product, idx) => (
                                <li key={idx} className="product-item">
                                    <strong>{product.name}</strong> - €{product.price} <br />
                                    Quantité: {product.quantity} <br />
                                    {/* Display image if needed */}
                                    {product.image && (
                                        <img
                                            src={URL.createObjectURL(product.image)}
                                            alt={product.name}
                                            width="100"
                                            height="100"
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Aucun produit disponible. Ajoutez des produits.</p>
            )}
        </div>
    );
};

export default Catalogue;
