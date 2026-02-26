import styles from "./Venue.module.css";

export default function Venue() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">The Venue</h2>
        <div className="divider" />
        <div className={styles.gallery}>
          <img
            src="/venue-1.jpg"
            alt="National Capital Trolley Museum"
            className={styles.photo}
          />
          <img
            src="/venue-2.jpg"
            alt="National Capital Trolley Museum"
            className={styles.photo}
          />
        </div>
        <p className={styles.caption}>
          National Capital Trolley Museum — Colesville, Maryland
        </p>
      </div>
    </section>
  );
}
