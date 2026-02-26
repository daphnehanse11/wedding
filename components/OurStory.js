import styles from "./OurStory.module.css";

export default function OurStory() {
  return (
    <section id="our-story" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        <div className="divider" />
        <div className={styles.content}>
          <p>
            {/* Replace this with your own story! */}
            We met and knew something special was beginning. What started as a
            chance encounter grew into a beautiful partnership built on laughter,
            adventure, and a whole lot of love.
          </p>
          <p>
            After many wonderful years together, we are thrilled to celebrate the
            next chapter of our story with the people who mean the most to us.
          </p>
          <p className={styles.tagline}>
            We can&apos;t wait to celebrate with you!
          </p>
        </div>
      </div>
    </section>
  );
}
