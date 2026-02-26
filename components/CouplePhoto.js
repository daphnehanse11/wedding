import styles from "./CouplePhoto.module.css";
import FadeIn from "./FadeIn";

export default function CouplePhoto() {
  return (
    <section className={styles.section}>
      <FadeIn>
        <div className={styles.frame}>
          <img
            src="/couple.jpg"
            alt="Daphne and Matt"
            className={styles.photo}
          />
        </div>
      </FadeIn>
    </section>
  );
}
