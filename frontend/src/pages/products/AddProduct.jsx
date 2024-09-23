import React, { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const productData = {
            name,
            category,
            price,
            description,
        };

        try {
            const response = await fetch('http://localhost:5000/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Produit ajouté avec succès!');
                // Clear the form after successful submission
                setName('');
                setCategory('');
                setPrice('');
                setDescription('');
            } else {
                alert('Erreur lors de l\'ajout du produit: ' + data.error);
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Erreur lors de l\'ajout du produit.');
        }
    };

    return (
        <div className="add-product-container">
            <h2>Ajouter un produit</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom du produit :</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Entrez le nom du produit"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Catégorie :</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Entrez la catégorie"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Prix :</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Entrez le prix"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description :</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Entrez une description"
                        required
                    ></textarea>
                </div>

                <button type="submit">Ajouter le produit</button>
            </form>
        </div>
    );
};

export default AddProduct;
