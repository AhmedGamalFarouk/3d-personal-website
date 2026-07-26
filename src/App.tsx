import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans overflow-x-clip selection:bg-purple-500 selection:text-white">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. MARQUEE SECTION (TECH STACK & SKILLS) */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection />

      {/* 4. SERVICES SECTION (CORE EXPERTISE) */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection />

      {/* FOOTER & CONTACT */}
      <Footer />
    </div>
  );
};

export default App;
