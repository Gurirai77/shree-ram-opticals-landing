// app/eyeglasses/page.tsx

import Image from "next/image";
import Link from "next/link";

import HeroSlider from "@/components/home/HeroSlider";
import TrendingCollections from "@/components/home/TrendingCollections";
import Brands from "@/components/home/Brands";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

import styles from "./EyeglassesPage.module.css";

const gallery = [
  "/black_titanium_eyeglasses.png",
  "/eyewear_closeup_final.png",
  "/eyewear_model_1_final.png",
  "/eyewear_flatlay_final.png",
];

export default function EyeglassesPage() {
  return (
    <main className={styles.page}>
      {/* TOP HERO */}

      <section className={styles.hero}>
        <div className={styles.overlay} />

        <Image
          src="/eyewear_model_2_final.png"
          alt="Luxury Eyeglasses"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <p>PREMIUM EYEWEAR COLLECTION</p>

          <h1>
            Elevate Your Vision
            <br />
            With Luxury Frames
          </h1>

          <span>
            Discover handcrafted eyeglasses designed for elegance,
            comfort, and modern lifestyles.
          </span>

          <div className={styles.heroButtons}>
            <Link
              href="https://maps.app.goo.gl/JEzBJE9TKyXvWFG17"
              target="_blank"
              className={styles.primaryBtn}
            >
              Visit Our Store
            </Link>

            <a href="#collection" className={styles.secondaryBtn}>
              Explore Collection
            </a>
          </div>
        </div>
      </section>

      {/* MINI INTRO */}

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introBox}>
            <div>
              <p className={styles.smallTitle}>
                DESIGNED FOR MODERN LIFESTYLES
              </p>

              <h2>
                Premium Eyeglasses
                <br />
                Crafted With Elegance
              </h2>
            </div>

            <div>
              <span>
                Explore a curated collection of luxury eyewear
                featuring premium materials, lightweight comfort,
                and timeless aesthetics designed for every
                personality.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section
        id="collection"
        className={styles.collection}
      >
        <div className={styles.container}>
          <div className={styles.heading}>
            <p>LUXURY COLLECTION</p>

            <h2>Explore Signature Frames</h2>

            <span>
              A premium showcase inspired by luxury optical brands.
            </span>
          </div>

          <div className={styles.grid}>
            {gallery.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  index === 0 ? styles.largeCard : ""
                }`}
              >
                <Image
                  src={item}
                  alt="Eyeglasses"
                  fill
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXISTING PREMIUM COMPONENTS */}

      <Brands />

      <TrendingCollections />

      <WhyChooseUs />

      {/* EXPERIENCE SECTION */}

      <section className={styles.experience}>
        <div className={styles.container}>
          <div className={styles.experienceGrid}>
            <div className={styles.experienceImage}>
              <Image
                src="/eyewear_showroom_final.png"
                alt="Premium Eyewear"
                fill
                className={styles.expImage}
              />
            </div>

            <div className={styles.experienceContent}>
              <p>STORE EXPERIENCE</p>

              <h2>
                Experience Premium
                <br />
                Eyewear In Person
              </h2>

              <span>
                Visit our showroom to explore luxury eyewear
                collections with expert guidance and personalized
                styling assistance.
              </span>

              <ul>
                <li>Luxury Imported Frames</li>
                <li>Latest International Designs</li>
                <li>Comfort & Lightweight Materials</li>
                <li>Professional Eye Testing</li>
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

      {/* TESTIMONIALS */}

      <Testimonials />

      {/* EXTRA PREMIUM SLIDER */}

      <div className={styles.bottomSlider}>
        <HeroSlider />
      </div>

      {/* FINAL CTA */}

      <section className={styles.cta}>
        <div className={styles.ctaOverlay} />

        <div className={styles.ctaContent}>
          <p>VISIT OUR SHOWROOM</p>

          <h2>
            Discover Luxury Eyewear
            <br />
            Crafted For Your Style
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