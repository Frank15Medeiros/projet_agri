import React, { useState } from 'react';
import Agricu from '../agriculteur/ventagricu';
import Catalogue from './catalogue';

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);

    // Function to add a new product to the product list
    const addProduct = (newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
    };

    return (
        <div className="product-catalog">
            <h1>Gestion des produits</h1>
            <Agricu addProduct={addProduct} />
            <Catalogue products={products} />
        </div>
    );
};

export default ProductCatalog;
