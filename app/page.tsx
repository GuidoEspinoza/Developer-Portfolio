'use client'

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/homepage/hero-section/HeroSection"), { ssr: false });
const AboutSection = dynamic(() => import("./components/homepage/about-section/AboutSection"), { ssr: false });
const ExperienceSection = dynamic(() => import("./components/homepage/experience-section/ExperienceSection"), { ssr: false });
const SkillsSection = dynamic(() => import("./components/homepage/skills-section/SkillsSection"), { ssr: false });
const EducationSection = dynamic(() => import("./components/homepage/education-section/EducationSection"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact-section/ContactSection"), { ssr: false });

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
