import styles from "./Venue.module.css";
import FadeIn from "./FadeIn";
import Flourish from "./Flourish";

export default function Venue() {
  return (
    <section className="section">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">The Venue</h2>
          <Flourish />
        </FadeIn>
        <FadeIn delay={150}>
          <div className={styles.gallery}>
            <img
              src="/venue-1.jpg"
              alt="Trolley cars at the National Capital Trolley Museum"
              className={styles.photo}
            />
            <img
              src="/venue-2.jpg"
              alt="National Capital Trolley Museum grounds"
              className={styles.photo}
            />
          </div>
          <p className={styles.caption}>
            National Capital Trolley Museum — Colesville, Maryland
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
