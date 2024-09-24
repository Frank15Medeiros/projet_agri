import React, { useState } from 'react';
import '../../cssfolder/AddProduct.css';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        quantity: '',
        unit: '', // Added unit field
        price: '',
        description: ''
    });
    const [message, setMessage] = useState('');

    // Update state when form fields change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Send data to server on form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setMessage(result.message || result.error);

            // Clear form if successful
            if (response.ok) {
                setFormData({ name: '', category: '', quantity: '', unit: '', price: '', description: '' });
            }
        } catch (error) {
            console.error('Error adding product:', error);
            setMessage('Une erreur s\'est produite lors de l\'ajout du produit.');
        }
    };

    return (
        <div className="form-container">
            <h2>Ajouter un produit</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom du produit :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Entrez le nom du produit"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Catégorie :</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Sélectionnez une catégorie</option>
                        <option value="Vegetable">Légumes</option>
                        <option value="Fruit">Fruits</option>
                        <option value="Animal">Produits animaux</option>
                        <option value="Other">Autres</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantité :</label>
                    <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        placeholder="Entrez la quantité"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="unit">Unité :</label>
                    <select
                        id="unit"
                        name="unit"
                        value={formData.unit}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Sélectionnez une unité</option>
                        <option value="Kg">Kilogramme (Kg)</option>
                        <option value="L">Litres (L)</option>
                        <option value="Unit">Unité</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Prix :</label>
                    <input
                        type="number"
                        step="0.01"
                        id="price"
                        name="price"
                        placeholder="Entrez le prix"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description :</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Entrez la description du produit"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Ajouter le produit</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default AddProduct;
