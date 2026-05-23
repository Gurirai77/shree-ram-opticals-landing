"use client";
import styles from "./Footer.module.css";

import {
    Phone,
    Mail,
    MapPin,
    ArrowUp,
} from "lucide-react";
import { useState } from "react";

import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";


export default function Footer() {

    const [email, setEmail] = useState("");

    const handleWhatsApp = () => {

        const phoneNumber = "919729267890";

        const message =
            `Hello Shree Ram Opticals,

I would like to stay updated with your premium eyewear collections, luxury launches, and exclusive offers.

My Email: ${email}`;

        const whatsappUrl =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappUrl,
            "_blank"
        );
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Newsletter */}
                <div className={styles.newsletter}>
                    {/* Left */}
                    <div className={styles.newsLeft}>
                        <p>JOIN THE VISION CLUB</p>

                        <h2>
                            Get Premium Style
                            <br />
                            Updates & Offers
                        </h2>

                        <span>
                            Discover exclusive collections,
                            luxury launches and premium eyewear trends.
                        </span>
                    </div>

                    {/* Right */}
                    <div className={styles.newsRight}>
                        <div className={styles.inputBox}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />

                            <button onClick={handleWhatsApp}>
                                SUBSCRIBE →
                            </button>
                        </div>

                        <div className={styles.features}>
                            <div>
                                ✦ Exclusive Offers
                            </div>

                            <div>
                                ✦ New Arrivals
                            </div>

                            <div>
                                ✦ VIP Access
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}>
                    <span>SR</span>
                </div>

                {/* Main Footer */}
                <div className={styles.mainFooter}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <h2>
                            SHREE RAM
                            <br />
                            <span>OPTICALS</span>
                        </h2>

                        <p>
                            Crafting clarity, luxury and confidence
                            since 2013. Premium eyewear for every
                            vision and every moment.
                        </p>

                        <div className={styles.socials}>
                            <a
                                href="https://www.instagram.com/shreeramopticalssirsa?igsh=MW9oNjZ2cTVvOWczZQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.instagram}
                            >
                                <FaInstagram size={20} />

                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.links}>
                        <h4>QUICK LINKS</h4>

                        <a href="/#Home">
                            Home
                        </a>

                        <a href="/#COLLECTION">
                            Collection
                        </a>

                        <a href="/#WhyChooseUs">
                            Why Choose Us
                        </a>

                        <a href="/#CustomerReviews">
                            Customer Reviews
                        </a>

                        <a href="/#Brands">Brands</a>

                        <a
                            href="/#OurJourney"
                            className={styles.offerLink}
                        >
                            Our Journey
                        </a>
                        <a href="/shree-ram-opticals-sirsa">
                            Shree Ram Opticals Sirsa
                        </a>
                        <a href="/best-optical-shop-in-sirsa">
                            Best Optical Shop in Sirsa
                        </a>
                    </div>

                    <div className={styles.faqSection}>
                        <h4>POPULAR QUESTIONS</h4>

                        <div className={styles.faqItem}>
                            <h5>
                                Which is the best optical shop in Sirsa?
                            </h5>

                            <p>
                                Shree Ram Opticals offers premium eyewear,
                                luxury sunglasses, contact lenses and
                                professional eye care solutions in Sirsa.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h5>
                                Do you offer premium sunglasses in Sirsa?
                            </h5>

                            <p>
                                Yes, we provide stylish premium sunglasses
                                collections inspired by modern international
                                luxury eyewear trends.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h5>
                                Do you provide contact lenses?
                            </h5>

                            <p>
                                We offer comfortable daily wear and premium
                                contact lens solutions for clear vision and
                                all-day comfort.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h5>
                                Where is Shree Ram Opticals located?
                            </h5>

                            <p>
                                Our premium optical showroom is located in
                                Sirsa, Haryana, India.
                            </p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className={styles.contact}>
                        <h4>CONTACT US</h4>

                        {/* PHONE */}

                        <a
                            href="tel:+919729267890"
                            className={styles.contactItem}
                        >
                            <Phone size={18} />

                            <span>
                                +91 97292 67890
                            </span>
                        </a>

                        {/* EMAIL */}

                        <a
                            href="mailto:opticalsshreeram@gmail.com"
                            className={styles.contactItem}
                        >
                            <Mail size={18} />

                            <span>
                                opticalsshreeram@gmail.com
                            </span>
                        </a>

                        {/* LOCATION */}

                        <a
                            href="https://maps.app.goo.gl/JEzBJE9TKyXvWFG17"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.contactItem}
                        >
                            <MapPin size={18} />

                            <span>
                                Goll Diggi, Begu Rd, near Aggarsain School, Sukh Sagar Colony, Sirsa, Haryana 125055
                            </span>
                        </a>

                        {/* GOOGLE MAP */}

                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps?q=Shree+Ram+Opticals+Sirsa&output=embed"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className={styles.map}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className={styles.bottom}>
                    {/* Left */}
                    <div className={styles.bottomLeft}>
                        <p>
                            © 2026 Shree Ram Opticals.
                            All Rights Reserved.
                        </p>

                        <span>
                            Design & Developed by{" "}

                            <a
                                href="https://gurirai.online"
                                target="_blank"
                            >
                                gurirai.online
                            </a>
                        </span>
                    </div>

                    {/* Center */}
                    {/* <div className={styles.bottomLinks}>
                        <a href="#">Privacy Policy</a>

                        <a href="#">Terms & Conditions</a>

                        <a href="#">Sitemap</a>
                    </div> */}

                    {/* Right */}
                    <button
                        className={styles.topBtn}
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
}