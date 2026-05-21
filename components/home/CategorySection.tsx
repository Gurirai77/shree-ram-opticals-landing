import Image from "next/image";
import styles from "./CategorySection.module.css";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Eyeglasses",
    subtitle: "Classic & Modern Frames",
    image: "/eyeglasses_premium.png",
    link: "/eyeglasses",
    large: true,
  },

  {
    id: 2,
    title: "Sunglasses",
    subtitle: "Luxury Sun Protection",
    image: "/sunglasses_premium.png",
    link: "/sunglasses",
    featured: true,
  },

  {
    id: 3,
    title: "Contact Lens",
    subtitle: "Comfort Vision",
    image: "/contact_lens_premium.png",
    link: "/contact-lenses",
  },
];

export default function CategorySection() {
  return (
    <section id="COLLECTION" className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <p>PREMIUM COLLECTION</p>

          <h2>Luxury Eyewear Collection</h2>

          <span>
            Discover premium frames crafted for elegance,
            comfort, and timeless style.
          </span>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {categories.map((item) => (
            <Link
              href={item.link}
              rel="noopener noreferrer"
              key={item.id}
              className={`${styles.card} ${
                item.large ? styles.largeCard : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.glow} />

              <div className={styles.content}>
                <p>{item.subtitle}</p>

                <h3>{item.title}</h3>

                <button>
                  Explore Collection

                  <span>→</span>
                </button>
              </div>

              {item.featured && (
                <div className={styles.badge}>
                  BEST SELLER
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}