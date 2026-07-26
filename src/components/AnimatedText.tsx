import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children === ' ' ? '\u00A0' : children}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');

  // Total characters count for spacing the range calculation
  const totalChars = text.length;
  let currentCharCount = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[720px] mx-auto text-[clamp(1rem,2vw,1.35rem)] flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em] ${className}`}
    >
      {words.map((word, wIdx) => {
        const chars = word.split('');
        return (
          <span key={wIdx} className="inline-flex whitespace-nowrap">
            {chars.map((char, cIdx) => {
              const start = currentCharCount / totalChars;
              currentCharCount++;
              const end = currentCharCount / totalChars;
              return (
                <Char key={cIdx} progress={scrollYProgress} range={[start, end]}>
                  {char}
                </Char>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
