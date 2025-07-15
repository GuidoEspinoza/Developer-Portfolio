'use client'

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/sections/hero/HeroSection"), { 
    ssr: false,
    loading: () => <div className="animate-pulse h-screen bg-gray-800/20 rounded-lg" />
});
const AboutSection = dynamic(() => import("./components/sections/about/AboutSection"), { 
    ssr: false,
    loading: () => <div className="animate-pulse h-96 bg-gray-800/20 rounded-lg" />
});
const ExperienceSection = dynamic(() => import("./components/sections/experience/ExperienceSection"), {
    ssr: false,
    loading: () => <div className="animate-pulse h-screen bg-gray-800/20 rounded-lg" />
});
const SkillsSection = dynamic(() => import("./components/sections/skills/SkillsSection"), {
    ssr: false,
    loading: () => <div className="animate-pulse h-screen bg-gray-800/20 rounded-lg" /> 
})
const EducationSection = dynamic(() => import("./components/sections/education/EducationSection"), {
    ssr: false,
    loading: () => <div className="animate-pulse h-screen bg-gray-800/20 rounded-lg" />
})
const ContactSection = dynamic(() => import("./components/sections/contact/ContactSection"), {
    ssr: false,
    loading: () => <div className="animate-pulse h-screen bg-gray-800/20 rounded-lg" /> 
})

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
