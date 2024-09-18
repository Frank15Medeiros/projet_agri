// src/pages/general/SignupClient.jsx
import React, { useState } from 'react';
import '../../cssfolder/signup_client.css';

const SignupClient = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
        surname: '',
        address: '',
        city: '',
        postal_code: '',
        phone: ''
    });
    const [message, setMessage] = useState('');

    // Update state when form fields change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Send data to server on form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            setMessage(result.message || result.error);
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('An error occurred during registration.');
        }
    };

    return (
        <div className="form-container">
            <h2>Inscription Client</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Nom d'utilisateur :</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Entrez votre nom d'utilisateur"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Entrez votre email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Entrez votre mot de passe"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Entrez votre nom"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.surname}
                        onChange={handleChange}
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
                        value={formData.address}
                        onChange={handleChange}
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
                        value={formData.city}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postal_code">Code postal :</label>
                    <input
                        type="text"
                        id="postal_code"
                        name="postal_code"
                        placeholder="Entrez votre code postal"
                        value={formData.postal_code}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">N° téléphone :</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Entrez votre numéro de téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
            <p>{message}</p>
            <p>
                Vous avez déjà un compte ? <a href="/login">Connexion</a>
            </p>
        </div>
    );
};

export default SignupClient;
