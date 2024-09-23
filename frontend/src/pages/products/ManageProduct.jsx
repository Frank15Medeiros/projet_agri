import React, { useState, useEffect } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [updatedProduct, setUpdatedProduct] = useState({});

    // Fetch all products from the database
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    // Handle form input changes for editing
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct((prev) => ({ ...prev, [name]: value }));
    };

    // Set the product to be edited
    const handleEdit = (product) => {
        setEditingProduct(product.id);
        setUpdatedProduct(product);
    };

    // Update product in the database
    const handleUpdate = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/update-product/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedProduct),
            });
            if (response.ok) {
                alert('Produit mis à jour avec succès');
                setEditingProduct(null);
                // Update products list
                const updatedProducts = products.map((product) =>
                    product.id === id ? { ...product, ...updatedProduct } : product
                );
                setProducts(updatedProducts);
            } else {
                alert('Erreur lors de la mise à jour du produit');
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Delete a product from the database
    const handleDelete = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit?')) {
            try {
                const response = await fetch(`http://localhost:5000/delete-product/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    alert('Produit supprimé avec succès');
                    setProducts(products.filter((product) => product.id !== id));
                } else {
                    alert('Erreur lors de la suppression du produit');
                }
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    return (
        <div className="manage-product-container">
            <h2>Gérer les produits</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Catégorie</th>
                        <th>Prix</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            {editingProduct === product.id ? (
                                <>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            value={updatedProduct.name}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="category"
                                            value={updatedProduct.category}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="price"
                                            value={updatedProduct.price}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="description"
                                            value={updatedProduct.description}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => handleUpdate(product.id)}>Sauvegarder</button>
                                        <button onClick={() => setEditingProduct(null)}>Annuler</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <button onClick={() => handleEdit(product)}>Modifier</button>
                                        <button onClick={() => handleDelete(product.id)}>Supprimer</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;
