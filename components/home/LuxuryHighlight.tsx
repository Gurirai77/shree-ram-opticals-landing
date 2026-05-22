import styles from "./LuxuryHighlight.module.css";

export default function LuxuryHighlight() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.line} />

        <div className={styles.content}>
          <span>WHY CHOOSE US</span>

          <div className={styles.highlightBox}>
            <p>
              Eye Check Up by Certified Experts
              <span>✅</span>
            </p>

            <div className={styles.dot} />

            <p>
              Best Eyewear at Best Prices
              <span>✅</span>
            </p>
          </div>
        </div>

        <div className={styles.line} />
      </div>
    </section>
  );
}