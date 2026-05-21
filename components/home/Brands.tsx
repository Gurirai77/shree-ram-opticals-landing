"use client";

import React from "react";

import Link from "next/link";

import styles from "./Brands.module.css";

interface BrandItem {
  id: number;

  name: string;

  tag: string;

  link: string;
}

const brandData: BrandItem[] = [
  {
    id: 1,
    name: "RAY-BAN",
    tag: "ICONIC STYLES",
    link: "/brands",
  },

  {
    id: 2,
    name: "VOGUE",
    tag: "FASHION EYEWEAR",
    link: "/brands",
  },

  {
    id: 3,
    name: "CARRERA",
    tag: "SPORTS LUXURY",
    link: "/brands",
  },

  {
    id: 4,
    name: "GUY LAROCHE",
    tag: "PARIS ELEGANCE",
    link: "/brands",
  },

  {
    id: 5,
    name: "BEBE",
    tag: "MODERN GLAMOUR",
    link: "/brands",
  },

  {
    id: 6,
    name: "NAUTICA",
    tag: "TIMELESS STYLE",
    link: "/brands",
  },

  {
    id: 7,
    name: "ONE DEGREE",
    tag: "MINIMAL DESIGN",
    link: "/brands",
  },

  {
    id: 8,
    name: "LACOSTE",
    tag: "PREMIUM FASHION",
    link: "/brands",
  },

  {
    id: 9,
    name: "CALVIN KLEIN",
    tag: "MODERN LUXURY",
    link: "/brands",
  },
];

const Brands: React.FC = () => {

  const infiniteBrands = [
    ...brandData,
    ...brandData,
  ];

  return (
    <section
      id="Brands"
      className={styles.brandsSection}
    >
      {/* HEADER */}

      <div className={styles.header}>
        <p className={styles.subtitle}>
          PREMIUM COLLECTION
        </p>

        <h2 className={styles.mainTitle}>
          LUXURY BRANDS
        </h2>
      </div>

      {/* MARQUEE */}

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          {infiniteBrands.map(
            (brand, index) => (
              <Link
                href={brand.link}
                key={`${brand.id}-${index}`}
                className={styles.brandCard}
              >
                <span className={styles.tag}>
                  {brand.tag}
                </span>

                <h3 className={styles.brandName}>
                  {brand.name}
                </h3>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Brands;