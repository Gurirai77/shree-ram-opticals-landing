// app/shree-ram-opticals-sirsa/page.tsx

import styles from "./ShreeRamOpticals.module.css";

export const metadata = {
  title:
    "Shree Ram Opticals Sirsa | Premium Optical Store",

  description:
    "Shree Ram Opticals Sirsa offers premium eyeglasses, luxury sunglasses, contact lenses and modern eye care solutions in Sirsa.",
};

export default function ShreeRamOpticalsPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.overlay} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p>PREMIUM EYEWEAR STORE</p>

            <h1>
              Shree Ram
              <br />
              Opticals Sirsa
            </h1>

            <span>
              Experience premium eyewear collections,
              luxury sunglasses, contact lenses and
              professional eye care solutions in Sirsa.
            </span>
          </div>
        </div>
      </section>

      {/* BLOG */}

      <section className={styles.blogSection}>
        <div className={styles.blogContainer}>
          <h2>
            Premium Eyewear Experience At
            Shree Ram Opticals Sirsa
          </h2>

          <p>
            Shree Ram Opticals Sirsa is one of the trusted
            destinations for premium eyewear, luxury
            sunglasses and modern eye care solutions in
            Sirsa. Customers looking for stylish frames,
            advanced vision solutions and comfortable
            eyewear collections can explore a wide variety
            of premium products designed for every age and
            lifestyle.
          </p>

          <p>
            The showroom offers a luxury optical shopping
            experience with elegant collections inspired by
            modern international eyewear trends. Whether
            customers need lightweight eyeglasses for
            daily use, fashionable sunglasses for premium
            styling or contact lenses for all-day comfort,
            Shree Ram Opticals provides carefully selected
            collections crafted for comfort and quality.
          </p>

          <p>
            One of the reasons customers trust Shree Ram
            Opticals Sirsa is the focus on customer
            satisfaction and professional eye care.
            Customers receive guidance for choosing frames,
            lenses and eyewear solutions according to their
            face shape, lifestyle and comfort preferences.
            From anti-glare lenses to blue light
            protection and premium vision correction
            solutions, every product is selected to deliver
            better clarity and comfort.
          </p>

          <p>
            Customers visiting the showroom can also
            explore luxury sunglasses inspired by modern
            fashion trends. Premium designs, elegant
            craftsmanship and stylish collections make the
            store a preferred destination for sunglasses in
            Sirsa. The collection combines fashion,
            comfort and UV protection for modern lifestyles.
          </p>

          <p>
            Shree Ram Opticals Sirsa also offers contact
            lens solutions designed for hydration, comfort
            and crystal clear vision. Customers searching
            for modern eye care products and premium
            optical collections can discover advanced
            options suitable for everyday use.
          </p>

          <p>
            If you are searching for premium eyewear,
            stylish sunglasses, contact lenses or trusted
            eye care solutions, Shree Ram Opticals Sirsa
            offers a modern and professional optical
            experience with premium collections and quality
            customer service.
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