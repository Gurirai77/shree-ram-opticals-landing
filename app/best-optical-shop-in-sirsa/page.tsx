// app/best-optical-shop-in-sirsa/page.tsx

import styles from "./BestOpticalShop.module.css";

export const metadata = {
  title:
    "Best Optical Shop In Sirsa | Premium Eyewear Store",

  description:
    "Visit Shree Ram Opticals - the best optical shop in Sirsa for premium eyeglasses, luxury sunglasses, contact lenses and professional eye care solutions.",

  keywords: [
    "Best Optical Shop in Sirsa",
    "Optical Shop in Sirsa",
    "Eyeglasses Shop Sirsa",
    "Luxury Sunglasses Sirsa",
    "Eye Testing Sirsa",
    "Premium Eyewear Sirsa",
    "Contact Lens Shop Sirsa",
  ],

  alternates: {
    canonical:
      "https://www.shreeramopticals.in/best-optical-shop-in-sirsa",
  },

  openGraph: {
    title:
      "Best Optical Shop In Sirsa | Shree Ram Opticals",

    description:
      "Premium eyewear, luxury sunglasses and modern eye care solutions in Sirsa.",

    url:
      "https://www.shreeramopticals.in/best-optical-shop-in-sirsa",

    siteName: "Shree Ram Opticals",

    images: [
      {
        url: "/shree_ram_opticals_banner_optimized.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",

    type: "article",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BestOpticalShopPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.overlay} />

        <div className={styles.container}>
          <div className={styles.content}>
            <p>PREMIUM OPTICAL STORE</p>

            <h1>
              Best Optical Shop
              <br />
              In Sirsa
            </h1>

            <span>
              Discover luxury eyewear, premium sunglasses,
              advanced contact lenses and modern eye care
              solutions at Shree Ram Opticals.
            </span>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT */}

      <section className={styles.blogSection}>
        <div className={styles.blogContainer}>
          <h2>
            Why Shree Ram Opticals Is The Best Optical Shop
            In Sirsa
          </h2>

          <p>
            Finding the best optical shop in Sirsa is not
            just about buying eyeglasses. Customers today
            look for premium quality, trusted eye care,
            stylish collections and professional service.
            Shree Ram Opticals has become one of the most
            trusted names for eyewear and vision care in
            Sirsa because of its luxury collections,
            advanced eye testing solutions and customer
            experience.
          </p>

          <p>
            At Shree Ram Opticals, customers can explore a
            wide range of premium eyeglasses, luxury
            sunglasses and comfortable contact lenses.
            Whether someone needs stylish daily wear
            frames, lightweight office eyewear or premium
            UV protection sunglasses, the store offers
            modern collections designed for every lifestyle.
          </p>

          <p>
            One of the biggest reasons people consider
            Shree Ram Opticals the best optical shop in
            Sirsa is the variety of premium brands
            available in the showroom. Customers can
            discover luxury eyewear collections inspired by
            international fashion trends along with elegant
            frames crafted for comfort and durability. The
            showroom atmosphere is designed to provide a
            premium shopping experience with modern
            interiors and expert guidance.
          </p>

          <p>
            Professional eye consultation is another reason
            why customers trust Shree Ram Opticals. Eye
            care experts help customers choose the perfect
            lenses, frames and vision solutions according
            to their comfort and style preferences. From
            anti-glare lenses to premium blue light
            protection and high quality prescription
            glasses, every product is selected carefully to
            ensure customer satisfaction.
          </p>

          <p>
            Customers searching for sunglasses in Sirsa
            also prefer Shree Ram Opticals because of its
            premium collection of fashionable and luxury
            sunglasses. The showroom features modern
            designs inspired by international luxury
            eyewear trends that combine fashion with
            comfort and protection.
          </p>

          <p>
            If you are looking for the best optical shop in
            Sirsa for premium eyewear, contact lenses,
            luxury sunglasses and professional eye care,
            Shree Ram Opticals offers a trusted destination
            with modern collections and excellent customer
            service.
          </p>

          <a
            href="https://maps.app.goo.gl/JEzBJE9TKyXvWFG17"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitBtn}
          >
            Visit Our Store
          </a>
        </div>
      </section>
    </main>
  );
}