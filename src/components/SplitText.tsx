import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  stagger?: number;
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean;
  as?: 'h1' | 'h2' | 'h3';
}

/** Letters rise and rotate into place from behind a mask, one after another. */
export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  charClassName = '',
  delay = 0,
  stagger = 0.035,
  immediate = false,
  as = 'h2',
}) => {
  const Tag = motion[as];
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const char: Variants = {
    hidden: { y: '110%', rotateX: -80, opacity: 0 },
    visible: {
      y: '0%',
      rotateX: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const trigger = immediate
    ? { animate: 'visible' }
    : { whileInView: 'visible', viewport: { once: true, amount: 0.4 } };

  return (
    <Tag aria-label={text} className={className} initial="hidden" variants={container} {...trigger}>
      {text.split(' ').map((word, wIdx, words) => (
        <span key={wIdx} aria-hidden className="inline-flex overflow-hidden pb-[0.06em] -mb-[0.06em]" style={{ perspective: 600 }}>
          {word.split('').map((c, cIdx) => (
            <motion.span
              key={cIdx}
              variants={char}
              className={`inline-block origin-bottom ${charClassName}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {c}
            </motion.span>
          ))}
          {wIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
};
