import React from 'react';
import '../../cssfolder/login.css'; // Assuming you move your CSS to login.css

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="form-container">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Utilisateur :</label>
                    <input
                        type="text"
                        id="name"
                        name="username"
                        placeholder="Entrez votre utilisateur"
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
                        placeholder="Mot de passe"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Connexion</button>
            </form>
            <p>
                Vous n'avez pas de compte ? <a href="/signup">Inscrivez-vous</a>
            </p>
        </div>
    );
};

export default Login;
