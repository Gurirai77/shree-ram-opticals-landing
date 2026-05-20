import styles from "./OurJourney.module.css";
import {
  Store,
  GraduationCap,
  Glasses,
  MapPin,
  Globe,
} from "lucide-react";

const timeline = [
  {
    year: "2013",
    title: "The Beginning",
    text: "Started the journey with a passion for premium eyewear and a vision to bring quality optical solutions to every customer.",
    icon: <Store size={22} />,
  },

  {
    year: "2014",
    title: "Learning & Expertise",
    text: "Traveled to Nashik and Gurugram to gain professional expertise and advanced knowledge in the world of optics and eyewear.",
    icon: <GraduationCap size={22} />,
  },

  {
    year: "2015",
    title: "Shree Ram Opticals Launched",
    text: "Officially opened the first Shree Ram Opticals store in Sirsa with a commitment to trust, precision, and premium customer experience.",
    icon: <MapPin size={22} />,
  },

  {
    year: "2018",
    title: "Premium Collection Expansion",
    text: "Expanded our eyewear collection with modern frames, branded sunglasses, and high-quality vision lenses.",
    icon: <Glasses size={22} />,
  },

  {
    year: "2026",
    title: "Digital Presence & Growth",
    text: "Stepped into the digital era with an enhanced online presence to serve customers with a seamless modern optical experience.",
    icon: <Globe size={22} />,
  },
];

export default function OurJourney() {
  return (
    <section id="OurJourney" className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <p>OUR JOURNEY</p>

          <h2>A Vision Built with Trust</h2>

          <span>
            From learning the craft of optics to becoming
            a trusted eyewear destination in Sirsa.
          </span>
        </div>

        {/* Main Layout */}
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.leftCard}>
            <img
              src="/storefront_vertical.webp"
              alt="Shree Ram Opticals Store"
            />

            <div className={styles.overlay} />

            <div className={styles.leftContent}>
              <p>CELEBRATING</p>

              <h3>10+</h3>

              <h4>Years of Trusted Service</h4>

              <span>
                Delivering premium eyewear, expert eye care,
                and trusted customer satisfaction since 2015.
              </span>

              {/* Stats */}
              <div className={styles.stats}>
                <div>
                  <strong>10K+</strong>
                  <p>Happy Customers</p>
                </div>

                <div>
                  <strong>1000+</strong>
                  <p>Frame Styles</p>
                </div>

                <div>
                  <strong>100%</strong>
                  <p>Trusted Quality</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div className={styles.timelineItem} key={index}>
                {/* Year */}
                <div className={styles.year}>
                  <span>{item.year}</span>
                </div>

                {/* Line */}
                <div className={styles.lineWrapper}>
                  <div className={styles.dot} />

                  {index !== timeline.length - 1 && (
                    <div className={styles.line} />
                  )}
                </div>

                {/* Card */}
                <div className={styles.card}>
                  <div className={styles.icon}>
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>

                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}