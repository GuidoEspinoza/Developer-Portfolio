import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/layout/ScrollToTop";
import Footer from "./components/layout/Footer";
import ErrorBoundary from './components/common/ErrorBoundary';
import CyberEffectsProvider from './components/providers/CyberEffectsProvider';

import "./styles/globals.css";
import "./styles/animations.css"

const inter = Inter({ subsets: ["latin"] });

import { siteMetadata } from './constants/metadata';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  authors: [{ name: siteMetadata.author }],
  publisher: siteMetadata.author,
  keywords: siteMetadata.keywords,
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
      <body className={`${inter.className} antialiased`} style={{ overflowX: 'hidden', cursor: 'none' }}>
        <ErrorBoundary>
          {/* Cyber Effects */}
          <CyberEffectsProvider />
          
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white z-50" style={{ overflowX: 'hidden' }}>
            <Navbar />
            {children}
            <Footer />
          </main>
          <ScrollToTop />
        </ErrorBoundary>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
