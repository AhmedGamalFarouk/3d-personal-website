import React, { useEffect } from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { initSmoothScroll } from './lib/smoothScroll';

export const App: React.FC = () => {
  useEffect(() => initSmoothScroll(), []);

  return (
    <div className="bg-[#08080A] min-h-screen text-[#D7E2EA] font-sans overflow-x-clip">
      {/* GLOBAL CHROME */}
      <ScrollProgress />
      <Navbar />
      <CustomCursor />
      <div aria-hidden className="grain" />

      <main>
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
      </main>

      {/* FOOTER & CONTACT */}
      <Footer />
    </div>
  );
};

export default App;
