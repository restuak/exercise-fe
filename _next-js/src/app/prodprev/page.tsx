import styles from "./page.module.css";

export default function ProdPrev() {
  return (
   <div className={styles.page}>
    <main className={styles.container}>
        <div className={styles.image}>
          <img src="/pp-content.png" alt="Parfume Image" />
        </div>
        <div className={styles.image2}>
          <img src="/pp-content2.png" alt="Parfume Image" />
        </div>

        <div className={styles.content}>
            <div className={styles.category}>
              <p>PERFUME</p>
            </div>

            <div className={styles.title}>
              <p>Gabrielle Essence Eau De Parfum</p>
            </div>

            <div className={styles.desc}>
              <p>
                A floral, solar and voluptuous interpretation composed by Olivier
                Polge, Perfumer-Creator for the House of CHANEL.
              </p>
            </div>

            <div className={styles.price}>
              <div className={styles.priceAft}>$149.99</div>
              <div className={styles.priceBef}>$169.99</div>
            </div>

            <div className={styles.cart}>
              <img src="/pp-chart.png" alt="Chart" />
              <div className={styles.cartText}>Adds to Cart</div>
            </div>
        </div>
    </main>
  </div>

  );
}
