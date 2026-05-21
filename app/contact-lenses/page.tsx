// app/contact-lenses/page.tsx

import Image from "next/image";
import Link from "next/link";

import HeroSlider from "@/components/home/HeroSlider";
import TrendingCollections from "@/components/home/TrendingCollections";
import Brands from "@/components/home/Brands";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

import styles from "./ContactLensesPage.module.css";

const gallery = [
  "/contact_lens_macro.png",
  "/contact_lens_hand.png",
  "/contact_lens_lifestyle.png",
  "/contact_lens_clean_flatlay.png",
];

export default function ContactLensesPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.overlay} />

        <Image
          src="/contact_lens_hero_banner.png"
          alt="Premium Contact Lenses"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <p>PREMIUM CONTACT LENS COLLECTION</p>

          <h1>
            Clear Vision
            <br />
            Everyday Comfort
          </h1>

          <span>
            Experience premium contact lenses designed for
            comfort, clarity, and effortless everyday wear.
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
                MODERN VISION SOLUTIONS
              </p>

              <h2>
                Premium Contact Lenses
                <br />
                Crafted For Comfort
              </h2>
            </div>

            <div>
              <span>
                Explore advanced contact lens collections
                designed with superior hydration,
                crystal-clear vision, and long-lasting
                comfort.
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
            <p>PREMIUM VISION CARE</p>

            <h2>Explore Modern Lens Solutions</h2>

            <span>
              Clean, comfortable, and designed for everyday
              confidence.
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
                  alt="Contact Lens"
                  fill
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPONENTS */}

      <div className={styles.lightTheme}>
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
                src="/contact_lens_store.png"
                alt="Premium Contact Lens"
                fill
                className={styles.expImage}
              />
            </div>

            <div className={styles.experienceContent}>
              <p>PROFESSIONAL EYE CARE</p>

              <h2>
                Experience Clear
                <br />
                Vision Comfort
              </h2>

              <span>
                Visit our store to discover premium contact
                lens solutions with professional consultation
                and personalized guidance.
              </span>

              <ul>
                <li>
                  All-Day Comfort Technology
                </li>

                <li>
                  Premium Hydration Support
                </li>

                <li>
                  Crystal Clear Vision
                </li>

                <li>
                  Expert Eye Consultation
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

      {/* EXTRA SLIDER */}

      <div className={styles.bottomSlider}>
        <HeroSlider />
      </div>

      {/* CTA */}

      <section className={styles.cta}>
        <div className={styles.ctaOverlay} />

        <div className={styles.ctaContent}>
          <p>VISIT OUR STORE</p>

          <h2>
            Experience Premium
            <br />
            Contact Lens Care
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