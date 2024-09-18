import React, { useState } from 'react';
import '../../cssfolder/ventagricu.css';

const Agricu = ({ addProduct }) => {
    const [formData, setFormData] = useState({
        name: '',
        image: null,
        price: '',
        quantity: '',
        category: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the form data to parent component's addProduct function
        addProduct(formData);

        // Reset the form
        setFormData({
            name: '',
            image: null,
            price: '',
            quantity: '',
            category: '',
        });
    };

    return (
        <div className="form-container">
            <h2>Ajouter un objet à vendre</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="item-name">Nom de l'objet :</label>
                    <input
                        type="text"
                        id="item-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Entrez le nom de l'objet"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="item-image">Image de l'objet :</label>
                    <input
                        type="file"
                        id="item-image"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="item-price">Prix (€) :</label>
                    <input
                        type="number"
                        id="item-price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Entrez le prix"
                        required
                        min="0"
                        step="0.01"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="item-quantity">Quantité :</label>
                    <input
                        type="number"
                        id="item-quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Entrez la quantité"
                        required
                        min="1"
                        step="1"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="item-category">Catégorie :</label>
                    <select
                        id="item-category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Sélectionnez une catégorie</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Légumes</option>
                        <option value="Dairy">Produits laitiers</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
                <button type="submit">Ajouter l'objet</button>
            </form>
        </div>
    );
};

export default Agricu;
