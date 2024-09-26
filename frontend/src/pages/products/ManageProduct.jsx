import React, { useState, useEffect } from 'react';
import '../../cssfolder/ManageProduct.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({ id: '', name: '', category: '', price: '', description: '', quantity: '', unit: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des produits :', error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/delete-product/${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            setMessage(result.message);
            fetchProducts();
        } catch (error) {
            console.error('Erreur lors de la suppression du produit :', error);
            setMessage('Erreur lors de la suppression du produit.');
        }
    };

    const startEditing = (product) => {
        setCurrentProduct(product);
        setIsEditing(true);
    };

    const handleEditChange = (e) => {
        setCurrentProduct({ ...currentProduct, [e.target.name]: e.target.value });
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/update-product/${currentProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentProduct),
            });
            const result = await response.json();
            setMessage(result.message);
            fetchProducts();
            setIsEditing(false);
            setCurrentProduct({ id: '', name: '', category: '', price: '', description: '', quantity: '', unit: '' });
        } catch (error) {
            console.error('Erreur lors de la modification du produit :', error);
            setMessage('Erreur lors de la modification du produit.');
        }
    };

    return (
        <div className="manage-products">
            <h2>Gérer les produits</h2>
            {message && <p className="message">{message}</p>}
            <div className="scroll-container">
                <div className="list-container">
                    {products.map((product) => (
                        <div key={product.id} className="product-item">
                            <h3>{product.name}</h3>
                            <p>Catégorie: {product.category}</p>
                            <p>Prix: {product.price} €</p>
                            <p>Quantité: {product.quantity} {product.unit}</p>
                            <p>Description: {product.description}</p>
                            <div className="actions">
                                <button className="btn-green" onClick={() => startEditing(product)}>Modifier</button>
                                <button className="btn-red" onClick={() => deleteProduct(product.id)}>Supprimer</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isEditing && (
                <div className="modal">
                    <h3>Modifier le produit</h3>
                    <form onSubmit={updateProduct}>
                        <input
                            type="text"
                            name="name"
                            value={currentProduct.name}
                            onChange={handleEditChange}
                            placeholder="Nom"
                            required
                        />
                        <input
                            type="text"
                            name="category"
                            value={currentProduct.category}
                            onChange={handleEditChange}
                            placeholder="Catégorie"
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            value={currentProduct.price}
                            onChange={handleEditChange}
                            placeholder="Prix"
                            required
                        />
                        <input
                            type="text"
                            name="quantity"
                            value={currentProduct.quantity}
                            onChange={handleEditChange}
                            placeholder="Quantité"
                            required
                        />
                        <textarea
                            name="description"
                            value={currentProduct.description}
                            onChange={handleEditChange}
                            placeholder="Description"
                            required
                        />
                        <button type="submit" className="btn-green">Mettre à jour</button>
                        <button type="button" onClick={() => setIsEditing(false)}>Annuler</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ManageProducts;
