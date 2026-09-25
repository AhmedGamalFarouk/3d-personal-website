import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Magnet } from './Magnet';

interface ContactButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Contact Me',
  href = 'mailto:ahmedgamalfarouk0@gmail.com',
  onClick,
  className = '',
}) => {
  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    backgroundSize: '160% 160%',
    boxShadow: '0 10px 40px -8px rgba(182, 1, 167, 0.55), 4px 4px 12px #7721B1 inset',
    outline: '2px solid #FFFFFF',
    outlineOffset: '-3px',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Magnet padding={40} strength={4}>
      <Component
        href={href}
        onClick={onClick}
        style={buttonStyle}
        className={`group/cta relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-[transform,box-shadow,background-position] duration-500 ease-out-expo hover:[background-position:100%_50%] hover:shadow-[0_16px_60px_-8px_rgba(182,1,167,0.8)] active:scale-95 cursor-pointer whitespace-nowrap ${className}`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[120%] group-hover/cta:animate-shine"
        />
        <span className="relative">{label}</span>
        <ArrowUpRight className="relative w-4 h-4 transition-transform duration-500 ease-out-expo group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 group-hover/cta:rotate-45" />
      </Component>
    </Magnet>
  );
};
