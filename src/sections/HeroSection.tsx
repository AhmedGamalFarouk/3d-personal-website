import React, { Suspense, lazy, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import { DeveloperBadge } from '../components/DeveloperBadge';
import { SplitText } from '../components/SplitText';
import { TiltCard } from '../components/TiltCard';
import { scrollToTarget } from '../lib/smoothScroll';

const HeroScene = lazy(() => import('../components/three/HeroScene'));

const hasWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
};

const ease = [0.16, 1, 0.3, 1] as const;

/** CSS orb shown while the WebGL scene loads, and instead of it when WebGL is unavailable. */
const OrbFallback: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-[60vmin] h-[60vmin] rounded-full bg-[radial-gradient(circle_at_35%_30%,#E879F9_0%,#B600A8_30%,#7621B0_60%,transparent_72%)] blur-2xl opacity-60 animate-drift" />
  </div>
);

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const webgl = useRef(typeof window !== 'undefined' && hasWebGL());

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  const headingY = useTransform(progress, [0, 1], ['0%', '-45%']);
  const headingScale = useTransform(progress, [0, 1], [1, 1.12]);
  const contentOpacity = useTransform(progress, [0, 0.6], [1, 0]);
  const badgeY = useTransform(progress, [0, 1], [0, 120]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] w-full flex flex-col overflow-hidden bg-[#08080A]"
    >
      {/* AMBIENT BACKDROP */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full bg-purple-700/20 blur-[120px] animate-drift" />
        <div
          className="absolute -bottom-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-orange-600/10 blur-[120px] animate-drift"
          style={{ animationDelay: '-7s' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      {/* 3D SCENE */}
      <div aria-hidden className="absolute inset-0 z-0">
        {webgl.current ? (
          <Suspense fallback={<OrbFallback />}>
            <HeroScene scroll={progress} />
          </Suspense>
        ) : (
          <OrbFallback />
        )}
      </div>

      {/* HERO HEADING */}
      <motion.div
        style={{ y: headingY, scale: headingScale, opacity: contentOpacity }}
        className="relative z-10 w-full flex-1 flex flex-col items-center justify-center pt-24 sm:pt-28 pointer-events-none"
      >
        <motion.span
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="mb-3 sm:mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#D7E2EA]/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Flutter · React · TypeScript
        </motion.span>
        <SplitText
          as="h1"
          text="HI, I'M AHMED"
          immediate
          delay={0.3}
          stagger={0.045}
          className="font-black uppercase tracking-tight leading-[0.9] whitespace-nowrap text-center w-full text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] select-none drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          charClassName="hero-heading"
        />
      </motion.div>

      {/* BOTTOM BAR: TAGLINE · BADGE · CTA */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-20 w-full px-5 sm:px-8 md:px-10 pb-7 sm:pb-8 md:pb-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-end gap-6 lg:gap-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease }}
          className="order-2 lg:order-1 text-[#D7E2EA]/85 font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.1vw,1.2rem)] max-w-[260px] sm:max-w-[320px]"
        >
          FRONT-END &amp; CROSS-PLATFORM MOBILE DEVELOPER SPECIALIZING IN FLUTTER, REACT, REACT NATIVE, AND TYPESCRIPT
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 25 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.4, delay: 0.7, ease }}
          style={{ y: badgeY }}
          className="order-1 lg:order-2 justify-self-center w-full max-w-[340px] sm:max-w-[420px] lg:w-[420px] xl:w-[460px]"
        >
          <TiltCard maxTilt={12} className="rounded-[28px] sm:rounded-[36px]">
            <DeveloperBadge />
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="order-3 flex items-center justify-between lg:justify-end gap-6"
        >
          <button
            onClick={() => scrollToTarget('#about')}
            className="flex lg:hidden xl:flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#D7E2EA]/60 hover:text-white transition-colors"
          >
            <span className="flex items-center justify-center w-8 h-12 rounded-full border border-white/20">
              <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
                <ArrowDown className="w-3.5 h-3.5" />
              </motion.span>
            </span>
            Scroll
          </button>
          <ContactButton label="Contact Me" href="mailto:ahmedgamalfarouk0@gmail.com" />
        </motion.div>
      </motion.div>

      {/* Fade into the next section */}
      <div aria-hidden className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#08080A] z-10 pointer-events-none" />
    </section>
  );
};
