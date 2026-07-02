import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Café Luchita | Café Lojano con calidad garantizada",
  description:
    "Disfruta de un café con identidad. Grano cultivado artesanalmente para llevar el orgullo de nuestra tierra directo a tu mesa.",
  alternates: { canonical: "https://cafe-luchita.com/" },
  openGraph: {
    title: "Café Luchita | Café Lojano con calidad garantizada",
    description:
      "Disfruta de un café con identidad. Grano cultivado artesanalmente para llevar el orgullo de nuestra tierra directo a tu mesa.",
    url: "https://cafe-luchita.com",
    siteName: "Café Luchita",
    images: [{ url: "https://cafe-luchita.com/landing-bg.jpeg", width: 1200, height: 630, alt: "Café Luchita" }],
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="bg-(--milk) text-(--coffee) font-(family-name:--font-body)" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
