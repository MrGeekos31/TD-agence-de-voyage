import { useState } from "react";
import listeDestinations from "../../Data/listeDestinations";
import styles from "./destinations.module.css";

function DestinationCard({ image, nom, pays, description, prix }) {
  const [affiche, setAffiche] = useState(false);

  return (
    <article className={styles.card}>
      <img src={image} alt={nom} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.nom}>{nom}</h2>
        <p className={styles.pays}>📍 {pays}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.prix}>{prix} DT</p>
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.btnDetails}
            onClick={() => setAffiche(!affiche)}
          >
            {affiche ? "Masquer" : "Afficher"}
          </button>
        </div>
      </div>
    </article>
  );
}

function Destinations() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Nos Destinations</h1>
      <div className={styles.destinations}>
        {listeDestinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            image={dest.image}
            nom={dest.nom}
            pays={dest.pays}
            description={dest.description}
            prix={dest.prix}
          />
        ))}
      </div>
    </section>
  );
}

export default Destinations;
