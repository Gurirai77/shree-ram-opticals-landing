import styles from "./LuxuryHighlight.module.css";

export default function LuxuryHighlight() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.line} />

        <div className={styles.content}>
          <span>FEATURED LUXURY LABELS</span>

          <h3>
            PRADA
          </h3>

          <div className={styles.dot} />

          <h3>
            DITA
          </h3>
        </div>

        <div className={styles.line} />
      </div>
    </section>
  );
}