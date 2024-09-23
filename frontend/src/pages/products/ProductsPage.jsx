// src/pages/products/ProductsPage.jsx
import React from 'react';
import AddProduct from './AddProduct';

const ProductsPage = () => {
    return (
        <div>
            <h1>Products</h1>
            <AddProduct />
            {/* You can add more components to list products here */}
        </div>
    );
};

export default ProductsPage;
