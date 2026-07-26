import React, { useEffect, useState, useRef } from 'react';

const ROW1_ITEMS = [
  'Flutter', 'Dart', 'React', 'React Native', 'TypeScript',
  'JavaScript', 'Angular', 'HTML5', 'CSS3', 'SQL', 'Java'
];

const ROW2_ITEMS = [
  'Firebase', 'SQLite', 'REST APIs', 'Redux Toolkit', 'Bloc',
  'Tailwind CSS', 'Git', 'GitHub', 'VS Code', 'Android Studio', 'Figma', 'CI/CD'
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Triple items for seamless horizontal scroll
  const row1Triple = [...ROW1_ITEMS, ...ROW1_ITEMS, ...ROW1_ITEMS];
  const row2Triple = [...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS];

  const row1Translate = scrollOffset - 200;
  const row2Translate = -(scrollOffset - 200);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-4">
        {/* ROW 1: PRIMARY TECH - MOVES RIGHT */}
        <div className="w-full overflow-hidden flex">
          <div
            className="flex gap-4 whitespace-nowrap"
            style={{
              transform: `translateX(${row1Translate}px)`,
              willChange: 'transform',
            }}
          >
            {row1Triple.map((tech, index) => (
              <div
                key={`row1-${index}`}
                className="bg-[#141414] border border-[#D7E2EA]/20 text-[#D7E2EA] rounded-2xl px-6 py-4 font-semibold text-lg sm:text-2xl flex items-center justify-center transition-all duration-300 hover:border-[#D7E2EA]/50 hover:bg-[#1A1A1A]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: TOOLS & BACKEND - MOVES LEFT */}
        <div className="w-full overflow-hidden flex">
          <div
            className="flex gap-4 whitespace-nowrap"
            style={{
              transform: `translateX(${row2Translate}px)`,
              willChange: 'transform',
            }}
          >
            {row2Triple.map((tool, index) => (
              <div
                key={`row2-${index}`}
                className="bg-[#141414] border border-[#D7E2EA]/20 text-[#D7E2EA] rounded-2xl px-6 py-4 font-semibold text-lg sm:text-2xl flex items-center justify-center transition-all duration-300 hover:border-[#D7E2EA]/50 hover:bg-[#1A1A1A]"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
