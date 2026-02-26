import styles from "./Hero.module.css";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.names}>Daphne &amp; Matt</h1>
        <div className={styles.divider} />
        <p className={styles.date}>September 26, 2026</p>
        <p className={styles.venue}>
          National Capital Trolley Museum
          <br />
          Colesville, Maryland
        </p>
        <Countdown />
      </div>
    </section>
  );
}
