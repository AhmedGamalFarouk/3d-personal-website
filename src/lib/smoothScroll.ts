import Lenis from 'lenis';

let lenis: Lenis | null = null;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Starts inertial smooth scrolling for the whole page. Returns a cleanup function. */
export const initSmoothScroll = () => {
  if (prefersReducedMotion()) return () => {};

  lenis = new Lenis({
    lerp: 0.085,
    wheelMultiplier: 1,
    anchors: true,
    autoRaf: true,
  });

  return () => {
    lenis?.destroy();
    lenis = null;
  };
};

export const scrollToTarget = (target: string | number) => {
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.6 });
    return;
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }
};
