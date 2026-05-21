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
  title:
    "Shree Ram Opticals Sirsa | Best Optical Shop In Sirsa",

  description:
    "Discover premium eyeglasses, luxury sunglasses, contact lenses and modern eye care solutions at Shree Ram Opticals Sirsa.",

  keywords: [
    "Shree Ram Opticals",
    "Shree Ram Opticals Sirsa",
    "Best Optical Shop in Sirsa",
    "Optical Shop in Sirsa",
    "Sunglasses Shop in Sirsa",
    "Eyeglasses in Sirsa",
    "Contact Lens in Sirsa",
    "Premium Eyewear Sirsa",
  ],

  openGraph: {
    title:
      "Shree Ram Opticals Sirsa",

    description:
      "Premium eyewear and luxury optical collections in Sirsa.",

    images: [
      "/revis.jpeg",
    ],
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