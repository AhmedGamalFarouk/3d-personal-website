import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from '../components/ContactButton';
import { Magnet } from '../components/Magnet';
import { DeveloperBadge } from '../components/DeveloperBadge';

export const HeroSection: React.FC = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 z-20"
      >
        <div className="w-full flex items-center justify-between">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* HERO HEADING (TOP/MID) */}
      <div className="relative w-full flex flex-col items-center justify-center my-auto z-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden w-full text-center"
        >
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[14vw] md:text-[15vw] lg:text-[16.5vw] mt-6 sm:mt-4 md:-mt-5 select-none">
            HI, I'M AHMED
          </h1>
        </motion.div>
      </div>

      {/* HERO CENTERPIECE (SLEEK DEVELOPER BADGE WITH MAGNET EFFECT) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 top-[46%] -translate-y-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full"
        >
          <DeveloperBadge />
        </Magnet>
      </motion.div>

      {/* BOTTOM BAR */}
      <div className="w-full flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        {/* LEFT PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[200px] sm:max-w-[280px] md:max-w-[340px]"
        >
          FRONT-END &amp; CROSS-PLATFORM MOBILE DEVELOPER SPECIALIZING IN FLUTTER, REACT, REACT NATIVE, AND TYPESCRIPT
        </motion.p>

        {/* RIGHT CONTACT BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton label="Contact Me" href="mailto:ahmedgamalfarouk0@gmail.com" />
        </motion.div>
      </div>

    </section>
  );
};
