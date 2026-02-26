import styles from "./Travel.module.css";

export default function Travel() {
  return (
    <section id="travel" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Travel &amp; Lodging</h2>
        <div className="divider" />

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Getting there</h3>
            <p>
              The National Capital Trolley Museum is located at 1313 Bonifant
              Road, Colesville, MD 20905, about 20 minutes north of Silver
              Spring.
            </p>
            <p className={styles.muted}>
              Parking is available on-site at no charge.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Shuttle service</h3>
            <p>
              A complimentary shuttle will run between the Silver Spring hotel
              block and the venue. Schedule and pickup details to follow.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Where to stay</h3>
            <p>
              We recommend booking in the Silver Spring, MD area for the most
              convenient access to the venue and shuttle service.
            </p>
            <ul className={styles.hotels}>
              <li>
                <strong>DoubleTree by Hilton Silver Spring</strong>
                <br />
                <span className={styles.muted}>
                  8727 Colesville Road, Silver Spring, MD
                </span>
              </li>
              <li>
                <strong>Courtyard by Marriott Silver Spring</strong>
                <br />
                <span className={styles.muted}>
                  12521 Prosperity Drive, Silver Spring, MD
                </span>
              </li>
            </ul>
            <p className={styles.muted}>
              Room block details coming soon.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Airports</h3>
            <ul className={styles.airports}>
              <li>
                <strong>DCA</strong> — Ronald Reagan Washington National (~30
                min)
              </li>
              <li>
                <strong>BWI</strong> — Baltimore/Washington International (~45
                min)
              </li>
              <li>
                <strong>IAD</strong> — Dulles International (~50 min)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
