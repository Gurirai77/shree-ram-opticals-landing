// components/common/WhatsAppButton.tsx

"use client";

import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {

  const phoneNumber = "919729267890";

  const message =
    "Hello Shree Ram Opticals, I would like to explore your premium eyewear collection.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      <img
        src="/whatsapp_PNG21.png"
        alt="WhatsApp"
        className={styles.icon}
      />
    </a>
  );
}