// components/home/TrendingCollections.tsx

import Image from "next/image";

import styles from "./TrendingCollections.module.css";

export default function TrendingCollections() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADING */}

        <div className={styles.heading}>
          <p>TRENDING COLLECTIONS</p>

          <h2>Luxury Styles For Every Look</h2>

          <span>
            Discover premium eyewear collections inspired
            by modern fashion and timeless elegance.
          </span>
        </div>

        {/* GRID */}

        <div className={styles.grid}>
          {/* LARGE CARD */}

          <div className={styles.largeCard}>
            <Image
              src="/luxury_vision_modern.webp"
              alt="Luxury Eyewear"
              fill
              priority
              className={styles.image}
            />

            <div className={styles.overlay} />

            <div className={styles.glow} />

            <div className={styles.content}>
              <p>PREMIUM EYEGLASSES</p>

              <h3>
                Crafted For
                <br />
                Modern Elegance
              </h3>

              <span>
                Explore lightweight luxury frames designed
                for comfort, clarity, and timeless style.
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className={styles.rightSide}>
            {/* SUNGLASSES */}

            <div className={styles.smallCard}>
              <Image
                src="/premium_sunglasses_bold.webp"
                alt="Luxury Sunglasses"
                fill
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.smallContent}>
                <p>LUXURY SUNGLASSES</p>

                <h4>Bold Summer Luxury</h4>

                <span>
                  Premium sunglasses crafted for iconic
                  fashion and UV protection.
                </span>
              </div>
            </div>

            {/* CONTACT LENS */}

            <div className={styles.smallCard}>
              <Image
                src="/minimal_frames_elegance.webp"
                alt="Contact Lens"
                fill
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.smallContent}>
                <p>CONTACT LENS CARE</p>

                <h4>Comfort Vision Everyday</h4>

                <span>
                  Advanced lens solutions designed for
                  hydration and crystal clear vision.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}