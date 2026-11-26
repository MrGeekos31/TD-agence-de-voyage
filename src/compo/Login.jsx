
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erreur, setErreur] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        const newerreur = {};

        // Validation email
        if (email.trim() === "") {
            newerreur.email = "Veuillez indiquer votre email";
        }
        else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newerreur.email = "Veuillez introduire un email valide";
        }

        // Validation mot de passe
        if (password.trim() === "") {
            newerreur.password = "Veuillez introduire votre mot de passe";
        }
        else {
            if (password.length < 8) {
                newerreur.password = "Le mot de passe doit avoir au moins 8 caractères";
            }

            if (!/[A-Z]/.test(password)) {
                newerreur.password = "Le mot de passe doit contenir au moins une lettre majuscule";
            }

            if (!/[0-9]/.test(password)) {
                newerreur.password = "Le mot de passe doit contenir au moins un chiffre";
            }

            if (!/[^a-zA-Z0-9]/.test(password)) {
                newerreur.password = "Le mot de passe doit contenir au moins un caractère spécial";
            }
        }

        setErreur(newerreur);

        if (Object.keys(newerreur).length === 0) {
            alert("Formulaire envoyé avec succès !");
        }

        console.log(newerreur);
    }

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="email">Email</label>

                <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {erreur.email && <span>{erreur.email}</span>}
            </div>

            <div>
                <label htmlFor="password">Password</label>

                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {erreur.password && <span>{erreur.password}</span>}
            </div>

            <div>
                <button type="submit">Enregistrer</button>
            </div>

        </form>
    );
}

export default Login;
