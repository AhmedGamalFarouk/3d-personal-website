import React, { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';

const ROW1_ITEMS = [
  'Flutter', 'Dart', 'React', 'React Native', 'TypeScript',
  'JavaScript', 'Angular', 'HTML5', 'CSS3', 'SQL', 'Java'
];

const ROW2_ITEMS = [
  'Firebase', 'SQLite', 'REST APIs', 'Redux Toolkit', 'Bloc',
  'Tailwind CSS', 'Git', 'GitHub', 'VS Code', 'Android Studio', 'Figma', 'CI/CD'
];

const COPIES = 4;

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

interface VelocityRowProps {
  baseVelocity: number;
  children: React.ReactNode;
}

/** Drifts continuously and speeds up (or reverses) with scroll velocity. */
const VelocityRow: React.FC<VelocityRowProps> = ({ baseVelocity, children }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 300 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-100 / COPIES, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full overflow-hidden flex">
      <motion.div className="flex whitespace-nowrap will-change-transform" style={{ x }}>
        {Array.from({ length: COPIES }).map((_, i) => (
          <div key={i} className="flex shrink-0" aria-hidden={i > 0}>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const MarqueeSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#08080A] pt-24 sm:pt-32 md:pt-40 pb-16 overflow-hidden select-none">
      {/* Edge fades */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-40 bg-gradient-to-r from-[#08080A] to-transparent z-10" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-40 bg-gradient-to-l from-[#08080A] to-transparent z-10" />

      <div className="flex flex-col gap-6 -rotate-2 scale-[1.04]">
        {/* ROW 1: PRIMARY TECH AS DISPLAY TYPE */}
        <VelocityRow baseVelocity={-2}>
          {ROW1_ITEMS.map((tech, index) => (
            <span key={tech} className="flex items-center font-black uppercase tracking-tight leading-none text-[clamp(2.5rem,7vw,6.5rem)]">
              <span className={index % 2 === 0 ? 'text-[#D7E2EA]' : 'text-outline'}>{tech}</span>
              <span className="text-gradient-brand mx-6 sm:mx-10 text-[0.5em]">✦</span>
            </span>
          ))}
        </VelocityRow>

        {/* ROW 2: TOOLS & BACKEND AS GLASS CHIPS */}
        <VelocityRow baseVelocity={1.5}>
          {ROW2_ITEMS.map((tool) => (
            <div key={tool} className="pr-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] px-6 py-3.5 font-semibold text-base sm:text-xl text-[#D7E2EA] flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-fuchsia-400 to-orange-400 shadow-[0_0_10px_rgba(232,121,249,0.8)]" />
                {tool}
              </div>
            </div>
          ))}
        </VelocityRow>
      </div>
    </section>
  );
};
