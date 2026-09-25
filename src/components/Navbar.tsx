import React, { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { scrollToTarget } from '../lib/smoothScroll';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  // Tuck the bar away while scrolling down, bring it back on any upward scroll
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 240);
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const hero = document.getElementById('home');
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToTarget(`#${id}`);
  };

  const highlighted = hovered ?? active;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -110 : 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full p-1.5 transition-all duration-500 ${
          scrolled ? 'glass' : 'bg-white/[0.03] border border-white/10 backdrop-blur-md'
        }`}
        onMouseLeave={() => setHovered(null)}
      >
        <a
          href="#home"
          onClick={(e) => go(e, 'home')}
          className="hidden min-[400px]:flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-fuchsia-600 via-purple-700 to-orange-600 text-white font-black text-xs sm:text-sm tracking-tight shadow-[0_0_20px_rgba(182,0,168,0.45)]"
          aria-label="Back to top"
        >
          AG
        </a>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => go(e, item.id)}
            onMouseEnter={() => setHovered(item.id)}
            className={`relative px-2.5 sm:px-5 py-2 text-[11px] sm:text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
              highlighted === item.id ? 'text-white' : 'text-[#D7E2EA]/70'
            }`}
          >
            {highlighted === item.id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </a>
        ))}
      </nav>
    </motion.header>
  );
};
