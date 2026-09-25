import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

/**
 * Pulls its children toward the cursor when it is within `padding` px of the element.
 * Driven by springs on motion values, so it never re-renders React on mouse move.
 */
export const Magnet: React.FC<MagnetProps> = ({ children, padding = 80, strength = 3, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const distanceX = e.clientX - (rect.left + rect.width / 2);
      const distanceY = e.clientY - (rect.top + rect.height / 2);
      const radius = Math.max(rect.width, rect.height) / 2 + padding;

      if (Math.hypot(distanceX, distanceY) < radius) {
        x.set(distanceX / strength);
        y.set(distanceY / strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength, x, y]);

  return (
    <motion.div ref={ref} className={`inline-block ${className}`} style={{ x: springX, y: springY }}>
      {children}
    </motion.div>
  );
};
