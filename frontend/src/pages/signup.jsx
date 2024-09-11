import React from 'react';
import '../cssfolder/signup.css'; // Assuming you move your CSS to signup.css

const Signup = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="form-container">
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Entrez votre nom"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="surname">Prénom :</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Entrez votre prénom"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Adresse :</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Entrez votre adresse"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Ville :</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Entrez votre ville"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postal-code">Code postal :</label>
                    <input
                        type="text"
                        id="postal-code"
                        name="postal_code"
                        placeholder="Entrez votre code postal"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Numéro de téléphone :</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Entrez votre numéro de téléphone"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="siret">Numéro SIRET :</label>
                    <input
                        type="text"
                        id="siret"
                        name="siret"
                        placeholder="Entrez votre numéro SIRET"
                        required
                        autoComplete="off"
                    />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
            <p>
                Vous avez déjà un compte ? <a href="/login">Connexion</a>
            </p>
        </div>
    );
};

export default Signup;
