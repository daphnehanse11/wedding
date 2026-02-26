import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.names}>Daphne &amp; Matt</p>
      <p className={styles.date}>September 26, 2026</p>
      <p className={styles.hearts}>&#9825;</p>
    </footer>
  );
}
