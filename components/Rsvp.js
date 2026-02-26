import styles from "./Rsvp.module.css";
import FadeIn from "./FadeIn";
import Flourish from "./Flourish";

export default function Rsvp() {
  return (
    <section id="rsvp" className="section">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">RSVP</h2>
          <Flourish />
        </FadeIn>
        <FadeIn delay={150}>
          <div className={styles.content}>
            <p className={styles.message}>
              We are so excited to celebrate with you!
            </p>
            <p className={styles.detail}>
              RSVP details are coming soon. Please check back for a link to
              respond.
            </p>
            <p className={styles.date}>
              Kindly respond by <strong>August 26, 2026</strong>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
