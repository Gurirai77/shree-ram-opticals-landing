import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar/Navbar";

import Footer from "@/components/layout/Footer/Footer";

import Topbar from "@/components/layout/Topbar/Topbar";

import WhatsAppButton from "@/components/common/WhatsAppButton";

import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],

  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shreeramopticals.in"),

  title:
    "Shree Ram Opticals Sirsa | Best Optical Shop In Sirsa",

  description:
    "Discover premium eyeglasses, luxury sunglasses, contact lenses and modern eye care solutions at Shree Ram Opticals Sirsa.",

  keywords: [
    "Shree Ram Opticals",
    "Best Optical Shop in Sirsa",
    "Eyewear Shop Sirsa",
    "Sunglasses Shop Sirsa",
    "Eye Checkup Sirsa",
    "Contact Lens Sirsa",
  ],

  verification: {
    google: "sCeKDx4oxVCOn4biAovEf2uLzvEo2mZnyXnX1sqqpPI",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Shree Ram Opticals Sirsa",

    description:
      "Premium eyewear and luxury optical collections in Sirsa.",

    url: "https://www.shreeramopticals.in",

    siteName: "Shree Ram Opticals",

    images: [
      {
        url: "/shree_ram_opticals_banner_optimized.jpg",

        width: 1200,

        height: 630,
      },
    ],

    locale: "en_IN",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
    >
      <body
        className="
          bg-white
          text-black
          font-sans
          antialiased
          min-h-screen
          overflow-x-hidden
        "
      >
        {/* GOOGLE ANALYTICS */}

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D1QWVY7REX"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            // Your Analytics
            gtag('config', 'G-D1QWVY7REX');

            // Client Analytics
            gtag('config', 'G-G72RM2G9J4');
          `}
        </Script>

        {/* LOCAL BUSINESS SCHEMA */}

        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "Optician",

              name: "Shree Ram Opticals",

              image:
                "https://www.shreeramopticals.in/shree_ram_opticals_banner_optimized.jpg",

              url: "https://www.shreeramopticals.in",

              telephone: "+91 97292 67890",

              address: {
                "@type": "PostalAddress",

                streetAddress:
                  "Goll Diggi, Begu Rd, near Aggarsain School, Sukh Sagar Colony",

                addressLocality: "Sirsa",

                addressRegion: "Haryana",

                postalCode: "125055",

                addressCountry: "IN",
              },

              openingHoursSpecification: [
                {
                  "@type":
                    "OpeningHoursSpecification",

                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],

                  opens: "10:00",

                  closes: "20:30",
                },
              ],

              sameAs: [
                "https://www.instagram.com/shreeramopticalssirsa",
              ],
            }),
          }}
        />

        <Topbar />

        <Navbar />

        <WhatsAppButton />

        {children}

        <Footer />
      </body>
    </html>
  );
}