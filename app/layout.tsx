import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/helper/ScrollToTop";
import Footer from "./components/Footer";

import "./globals.css";
import "./card.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio de Guido Espinoza. Frontend Developer",
  description:
    "Este es el portafolio de Guido Espinoza. Soy un desarrollador FrontEnd, me especializo en ecommerce con la plataforma Vtex. Me gusta mucho aprender cosas nuevas, no tengo miedo a equivocarme y siempre doy lo mejor de mi.",
  authors: [{name: "Guido Espinoza"}],
  publisher: "Guido Espinoza",
  keywords: ["Frontend Developer, Portafolio, Vtex, Ecommerce, Desarrollo Web, Guido Espinoza"],
  robots: {
    index: true,
    follow: true,
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
        className={`${inter.className} antialiased`}
      >
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
