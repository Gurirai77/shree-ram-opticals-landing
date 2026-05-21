// app/brands/page.tsx

import Image from "next/image";

import styles from "./BrandsPage.module.css";

const brands = [
  {
    name: "Ray-Ban",
    image: "/rayban_brand.jpg",
  },

  {
    name: "Vogue",
    image: "/vogue_brand.jpg",
  },

  {
    name: "Carrera",
    image: "/carrera_brand.jpg",
  },

  {
    name: "Guy Laroche",
    image: "/guy_laroche_brand.jpg",
  },

  {
    name: "Bebe",
    image: "/bebe_brand.jpg",
  },

  {
    name: "Nautica",
    image: "/nautica_brand.jpg",
  },

  {
    name: "One Degree",
    image: "/one_degree_brand.jpg",
  },

  {
    name: "Lacoste",
    image: "/lacoste_brand.jpg",
  },

  {
    name: "Calvin Klein",
    image: "/calvin_klein_brand.jpg",
  },
];

export default function BrandsPage() {
  return (
    <main className={styles.page}>
      
      {/* BRANDS SECTION */}

      <section className={styles.brandsSection}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <p>OUR COLLECTION</p>

            <h2>Luxury Brands We Offer</h2>

            <span>
              Premium eyewear collections inspired by global
              fashion and timeless craftsmanship.
            </span>
          </div>

          <div className={styles.grid}>
            {brands.map((brand, index) => (
              <div
                key={index}
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className={styles.image}
                  />

                  <div className={styles.cardOverlay} />
                </div>

                <div className={styles.cardContent}>
                  <h3>{brand.name}</h3>

                  <p>
                    Premium luxury eyewear collection
                    designed for modern style.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section className={styles.experience}>
        <div className={styles.container}>
          <div className={styles.expBox}>
            <p>LUXURY STORE EXPERIENCE</p>

            <h2>
              Explore Premium Brands
              <br />
              In Our Showroom
            </h2>

            <span>
              Visit Shree Ram Opticals and discover curated
              eyewear collections featuring iconic luxury
              brands and premium craftsmanship.
            </span>

            <a
              href="https://maps.app.goo.gl/JEzBJE9TKyXvWFG17"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitBtn}
            >
              Visit Our Store
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}