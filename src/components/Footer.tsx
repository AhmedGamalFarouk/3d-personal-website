import React, { useState } from 'react';
import { ContactButton } from './ContactButton';
import { Github, Linkedin, Mail, Phone, ArrowUp, Copy, Check } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { SplitText } from './SplitText';
import { scrollToTarget } from '../lib/smoothScroll';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'ahmedgamalfarouk0@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    scrollToTarget(0);
  };

  return (
    <footer id="contact" className="w-full bg-[#08080A] text-[#D7E2EA] border-t border-white/10 pt-24 sm:pt-32 pb-12 px-6 md:px-10 overflow-hidden relative">
      {/* Glow rising from the horizon */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[10%] w-[90vw] max-w-[1100px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(182,0,168,0.28)_0%,rgba(118,33,176,0.14)_35%,transparent_65%)] blur-2xl animate-drift" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
        
        {/* BIG CONTACT CALLOUT */}
        <FadeIn delay={0} y={30} className="flex flex-col items-center gap-6">
          <span className="px-4 py-1.5 rounded-full glass text-fuchsia-200 text-xs uppercase font-mono tracking-widest">
            LET'S WORK TOGETHER
          </span>
          <SplitText
            text="READY TO BUILD SOMETHING EXTRAORDINARY?"
            stagger={0.018}
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#D7E2EA] tracking-tight max-w-3xl flex flex-wrap justify-center"
          />
          <p className="text-[#D7E2EA]/70 text-base sm:text-lg max-w-xl font-light">
            Available for full-time roles, cross-platform mobile apps (Flutter &amp; React Native), and front-end engineering projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <ContactButton label="Contact Me" href={`mailto:${email}`} />
            
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm text-[#D7E2EA] font-medium hover:bg-white/10 hover:border-white/25 transition-all duration-500"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 opacity-70" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </FadeIn>

        {/* SOCIAL & CONTACT LINKS */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10 text-left">
          
          <div className="flex flex-col gap-2 p-4 rounded-2xl glass transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-white/20">
            <span className="text-xs font-mono text-[#D7E2EA]/50 uppercase flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-purple-400" /> Email
            </span>
            <a href={`mailto:${email}`} className="text-sm font-semibold text-[#D7E2EA] hover:text-purple-300 transition-colors truncate">
              {email}
            </a>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl glass transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-white/20">
            <span className="text-xs font-mono text-[#D7E2EA]/50 uppercase flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-cyan-400" /> Phone
            </span>
            <a href="tel:+201023510831" className="text-sm font-semibold text-[#D7E2EA] hover:text-cyan-300 transition-colors">
              +20 102 351 0831
            </a>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl glass transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-white/20">
            <span className="text-xs font-mono text-[#D7E2EA]/50 uppercase flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5 text-pink-400" /> GitHub
            </span>
            <a href="https://github.com/AhmedGamalFarouk" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#D7E2EA] hover:text-pink-300 transition-colors">
              github.com/AhmedGamalFarouk
            </a>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl glass transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-white/20">
            <span className="text-xs font-mono text-[#D7E2EA]/50 uppercase flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
            </span>
            <a href="https://linkedin.com/in/ahmed-gamal-farouk" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#D7E2EA] hover:text-blue-300 transition-colors">
              Ahmed Gamal Farouk
            </a>
          </div>

        </div>

      </div>

      {/* OVERSIZED SIGNATURE */}
      <FadeIn y={60} className="relative w-full mt-16 select-none pointer-events-none">
        <p aria-hidden className="text-center font-black uppercase leading-[0.8] tracking-tighter text-[12vw] whitespace-nowrap bg-gradient-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
          AHMED GAMAL
        </p>
      </FadeIn>

      <div className="relative max-w-5xl mx-auto mt-10">
        {/* BOTTOM COPYRIGHT & SCROLL TO TOP */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-[#D7E2EA]/60 font-mono">
          <p>&copy; {new Date().getFullYear()} Ahmed Gamal Farouk. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#D7E2EA]/80 hover:text-white transition-colors group cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <div className="p-2 rounded-full glass group-hover:border-fuchsia-400 transition-all duration-500 group-hover:-translate-y-1">
              <ArrowUp className="w-4 h-4 text-fuchsia-400" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
