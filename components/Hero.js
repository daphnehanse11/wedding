import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.prelude}>Together with their families</p>
        <h1 className={styles.names}>Daphne &amp; Matt</h1>
        <div className={styles.divider} />
        <p className={styles.date}>September 26, 2026</p>
        <p className={styles.venue}>
          National Capital Trolley Museum
          <br />
          Colesville, Maryland
        </p>
      </div>
    </section>
  );
}
