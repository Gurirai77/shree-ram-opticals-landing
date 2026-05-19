import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar/Navbar";

import Footer from "@/components/layout/Footer/Footer";


import Topbar from "@/components/layout/Topbar/Topbar";

const inter = Inter({
  subsets: ["latin"],

  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shree Ram Opticals",

  description:
    "Premium Optical Ecommerce Website",
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

          {children}

          <Footer />
      </body>
    </html>
  );
}