import HeroSection from "./components/homepage/hero-section/HeroSection";
import AboutSection from "./components/homepage/about-section/AboutSection";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
    </div>
  );
}
