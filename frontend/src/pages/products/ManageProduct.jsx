import React, { useState, useEffect } from 'react';
import '../../cssfolder/ManageProduct.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');
    const [editProduct, setEditProduct] = useState(null); // For editing
    const [editData, setEditData] = useState({ name: '', category: '', quantity: '', unit: '', price: '', description: '' });

    // Fetch products from the server
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Delete a product
    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/delete-product/${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            setMessage(result.message);
            fetchProducts(); // Refresh products after deletion
        } catch (error) {
            console.error('Error deleting product:', error);
            setMessage('Erreur lors de la suppression du produit.');
        }
    };

    // Handle edit button click
    const handleEditClick = (product) => {
        setEditProduct(product.id);
        setEditData({ 
            name: product.name,
            category: product.category,
            quantity: product.quantity,
            unit: product.unit,
            price: product.price,
            description: product.description,
        });
    };

    // Update product details
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/update-product/${editProduct}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editData),
            });
            const result = await response.json();
            setMessage(result.message);
            fetchProducts(); // Refresh the list after updating
            setEditProduct(null); // Clear the edit mode
        } catch (error) {
            console.error('Error updating product:', error);
            setMessage('Erreur lors de la mise à jour du produit.');
        }
    };

    return (
        <div className="manage-products">
            <h2>Gérer les produits</h2>
            {message && <p className="message">{message}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Catégorie</th>
                        <th>Quantité</th>
                        <th>Unité</th>
                        <th>Prix</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.quantity}</td>
                            <td>{product.unit}</td>
                            <td>{product.price} €</td>
                            <td>{product.description}</td>
                            <td>
                                <button className="edit-button" onClick={() => handleEditClick(product)}>Edit</button>
                                <button className="delete-button" onClick={() => deleteProduct(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editProduct && (
                <form onSubmit={handleUpdate}>
                    <h3>Edit Product</h3>
                    <div className="form-group">
                        <label htmlFor="name">Nom:</label>
                        <input
                            type="text"
                            name="name"
                            value={editData.name}
                            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Catégorie:</label>
                        <input
                            type="text"
                            name="category"
                            value={editData.category}
                            onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantité:</label>
                        <input
                            type="text"
                            name="quantity"
                            value={editData.quantity}
                            onChange={(e) => setEditData({ ...editData, quantity: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="unit">Unité:</label>
                        <input
                            type="text"
                            name="unit"
                            value={editData.unit}
                            onChange={(e) => setEditData({ ...editData, unit: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Prix:</label>
                        <input
                            type="number"
                            step="0.01"
                            name="price"
                            value={editData.price}
                            onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            name="description"
                            value={editData.description}
                            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit">Update Product</button>
                </form>
            )}
        </div>
    );
};

export default ManageProducts;
