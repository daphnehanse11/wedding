import styles from "./Details.module.css";
import FadeIn from "./FadeIn";
import Flourish from "./Flourish";

export default function Details() {
  return (
    <section id="details" className="section">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Wedding Details</h2>
          <Flourish />
        </FadeIn>
        <FadeIn delay={150}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Ceremony</h3>
              <p className={styles.time}>5:00 PM</p>
              <p className={styles.place}>National Capital Trolley Museum</p>
              <p className={styles.address}>
                1313 Bonifant Road
                <br />
                Colesville, MD 20905
              </p>
              <a
                href="https://maps.google.com/?q=National+Capital+Trolley+Museum+1313+Bonifant+Rd+Colesville+MD+20905"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                View on Google Maps
              </a>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Reception</h3>
              <p className={styles.time}>6:30 PM</p>
              <p className={styles.place}>National Capital Trolley Museum</p>
              <p className={styles.address}>
                Celebration to follow the ceremony
                <br />
                at the same location
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={300}>
          <div className={styles.note}>
            <h3 className={styles.cardTitle}>Attire</h3>
            <p>Cocktail attire</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
