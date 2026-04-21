import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Café Luchita | Café Lojano con calidad garantizada",
  description: "Disfruta de un café con identidad. Grano cultivado artesanalmente para llevar el orgullo de nuestra tierra directo a tu mesa.",
  alternates: {
    canonical: 'https://cafe-luchita.com/',
  },
  openGraph: {
    title: 'Café Luchita | Café Lojano con calidad garantizada',
    description: 'Disfruta de un café con identidad. Grano cultivado artesanalmente para llevar el orgullo de nuestra tierra directo a tu mesa.',
    url: 'https://cafe-luchita.com',
    siteName: 'Café Luchita',
    images: [
      {
        url: 'https://cafe-luchita.com/landing-bg.jpeg', // URL absoluta
        width: 1200,
        height: 630,
        alt: 'Café Luchita',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.className} bg-black`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
