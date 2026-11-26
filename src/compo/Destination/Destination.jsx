import listeDestination from "../../Data/listeDestinations";
import styles from "./Destination.module.css";
import { useState } from "react";

function Destination({ image, nom, pays, description, prix }) {
    const [affiche, setAffiche] = useState(false);
    

    return (
        <article className={styles.card}>
            <img src={image} alt={nom} className={styles.image} />
            <div className={styles.content}>
                <h2>{nom}</h2>
                <p>{pays}</p>
                <p>{description}</p>
                <p>{prix} €</p>
                <button type="button">Voir plus</button>
                <button type="button" className={styles.favori}>Favoris</button>
            </div>
        </article>
    );
}

function DestinationSection() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Nos destinations</h1>

            <div className={styles.destinations}>
                {listeDestination.map((destination) => (
                    <Destination
                        key={destination.id}
                        image={destination.image}
                        nom={destination.nom}
                        pays={destination.pays}
                        description={destination.description}
                        prix={destination.prix}
                    />
                ))}
            </div>
        </section>
    );
}

export default DestinationSection;