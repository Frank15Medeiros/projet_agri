import React from 'react';
import '../cssfolder/agricu.css'; // Assuming you move your CSS to agricu.css

const Agricu = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        const formData = new FormData(event.target);
        // You can send formData to your API or server here
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
                        name="item_name"
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
                        name="item_image"
                        accept="image/*"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="item-price">Prix (€) :</label>
                    <input
                        type="number"
                        id="item-price"
                        name="item_price"
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
                        name="item_quantity"
                        placeholder="Entrez la quantité"
                        required
                        min="1"
                        step="1"
                    />
                </div>
                <button type="submit">Ajouter l'objet</button>
            </form>
        </div>
    );
};

export default Agricu;
