// app/sunglasses/page.tsx

import Image from "next/image";
import Link from "next/link";

import TrendingCollections from "@/components/home/TrendingCollections";
import Brands from "@/components/home/Brands";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

import styles from "./SunglassesPage.module.css";

const gallery = [
  "/sunglasses_front_unbranded_final.png",
  "/sunglasses_side_unbranded_final.png",
  "/sunglasses_model_unbranded_final.png",
  "/sunglasses_flatlay_unbranded_final.png",
];

export default function SunglassesPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.overlay} />

        <Image
          src="/ultra_luxury_cinematic_banner.png"
          alt="Luxury Sunglasses"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <p>LUXURY SUNGLASSES COLLECTION</p>

          <h1>
            Bold Sunglasses
            <br />
            Designed To Stand Out
          </h1>

          <span>
            Discover premium sunglasses crafted with luxury
            finishes, iconic aesthetics, and superior UV
            protection for modern lifestyles.
          </span>

          <div className={styles.heroButtons}>
            <Link
              href="https://maps.app.goo.gl/JEzBJE9TKyXvWFG17"
              target="_blank"
              className={styles.primaryBtn}
            >
              Visit Our Store
            </Link>

            <a
              href="#collection"
              className={styles.secondaryBtn}
            >
              Explore Collection
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introBox}>
            <div>
              <p className={styles.smallTitle}>
                DESIGNED FOR MODERN FASHION
              </p>

              <h2>
                Premium Sunglasses
                <br />
                Crafted For Every Season
              </h2>
            </div>

            <div>
              <span>
                Explore luxury sunglasses inspired by
                international fashion, premium materials,
                and timeless statement designs built for
                confidence.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION */}

      <section
        id="collection"
        className={styles.collection}
      >
        <div className={styles.container}>
          <div className={styles.heading}>
            <p>LUXURY SUNGLASSES</p>

            <h2>Explore Signature Shades</h2>

            <span>
              Inspired by luxury fashion brands and modern
              summer aesthetics.
            </span>
          </div>

          <div className={styles.grid}>
            {gallery.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  index === 0
                    ? styles.largeCard
                    : ""
                }`}
              >
                <Image
                  src={item}
                  alt="Luxury Sunglasses"
                  fill
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

 

<div className={styles.darkTheme}>
  <Brands />

  <TrendingCollections />

  <WhyChooseUs />

  <Testimonials />
</div>

      {/* EXPERIENCE */}

      <section className={styles.experience}>
        <div className={styles.container}>
          <div className={styles.experienceGrid}>
            <div className={styles.experienceImage}>
              <Image
                src="/sun-shop-pics.png"
                alt="Luxury Sunglasses"
                fill
                className={styles.expImage}
              />
            </div>

            <div className={styles.experienceContent}>
              <p>PREMIUM STORE EXPERIENCE</p>

              <h2>
                Discover Luxury
                <br />
                Sunglasses In Person
              </h2>

              <span>
                Visit our showroom and explore exclusive
                sunglasses collections featuring premium
                comfort, bold designs, and luxury
                craftsmanship.
              </span>

              <ul>
                <li>
                  Luxury UV Protection Lenses
                </li>

                <li>
                  Bold Modern Fashion Frames
                </li>

                <li>
                  Premium Imported Collections
                </li>

                <li>
                  Celebrity Inspired Designs
                </li>
              </ul>

              <Link
                href="https://maps.app.goo.gl/JEzBJE9TKyXvWFG17"
                target="_blank"
                className={styles.visitBtn}
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <div className={styles.ctaOverlay} />

        <div className={styles.ctaContent}>
          <p>VISIT OUR SHOWROOM</p>

          <h2>
            Experience Luxury
            <br />
            Sunglasses Collection
          </h2>

          <Link
            href="https://maps.app.goo.gl/JEzBJE9TKyXvWFG17"
            target="_blank"
            className={styles.ctaBtn}
          >
            Visit Our Store
          </Link>
        </div>
      </section>
    </main>
  );
}