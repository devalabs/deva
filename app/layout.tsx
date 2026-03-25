import type React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "DEVA - Fashion Portfolio",
  description: "Fashion portfolio showcasing editorial work and collections",
  generator: "v0.app",
};

const font1 = localFont({
  src: "../fonts/BeautifulKisses.ttf",
  variable: "--font1",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} ${font1.variable} font-mono antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
