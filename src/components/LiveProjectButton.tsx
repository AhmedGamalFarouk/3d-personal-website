import React from 'react';
import { ExternalLink } from 'lucide-react';

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
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap ${className}`}
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4 opacity-80" />
    </a>
  );
};
