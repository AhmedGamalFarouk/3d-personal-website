import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'View Project',
  href = '#',
  onClick,
  className = '',
}) => {
  const isLink = Boolean(href && href !== '#');

  return (
    <a
      href={href}
      target={isLink ? '_blank' : '_self'}
      rel={isLink ? 'noopener noreferrer' : ''}
      onClick={onClick}
      className={`group/btn relative isolate overflow-hidden inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/60 text-[#D7E2EA] font-medium uppercase tracking-widest px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm transition-colors duration-500 ease-out-expo hover:text-[#0C0C0C] hover:border-[#D7E2EA] active:scale-95 cursor-pointer whitespace-nowrap ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-[#D7E2EA] origin-bottom scale-y-0 rounded-full transition-transform duration-500 ease-out-expo group-hover/btn:scale-y-100"
      />
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out-expo group-hover/btn:rotate-45" />
    </a>
  );
};
