import type { Metadata } from "next";
import { League_Spartan, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "FB Development Company | Heritage Property Development Bedfordshire",
  description: "Transforming historic rural properties with sustainable design. Family-owned UK development company specialising in heritage preservation and contemporary ecological principles.",
  keywords: "heritage property development, barn conversions, sustainable building UK, historic property restoration, Bedfordshire development, conservation area planning",
  authors: [{ name: "FB Development Company" }],
  creator: "FB Development Company",
  publisher: "FB Development Company",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://fbdevelopment.co.uk",
    title: "FB Development Company | Heritage Property Development",
    description: "Transforming historic rural properties with sustainable design. Family-owned UK development company specialising in heritage preservation.",
    siteName: "FB Development Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "FB Development Company | Heritage Property Development",
    description: "Transforming historic rural properties with sustainable design. Family-owned UK development company specialising in heritage preservation.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${libreBaskerville.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
