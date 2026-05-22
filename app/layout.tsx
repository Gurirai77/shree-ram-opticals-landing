import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar/Navbar";

import Footer from "@/components/layout/Footer/Footer";


import Topbar from "@/components/layout/Topbar/Topbar";
import WhatsAppButton from "@/components/common/WhatsAppButton";

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
        url: "/shree_ram_opticals_banner_1_resized.png",
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
        
          <Topbar />
          <Navbar />
          <WhatsAppButton />

          {children}

          <Footer />
      </body>
    </html>
  );
}