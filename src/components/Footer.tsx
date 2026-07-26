import React, { useState } from 'react';
import { ContactButton } from './ContactButton';
import { Github, Linkedin, Mail, Phone, ArrowUp, Copy, Check, FileText } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'ahmedgamalfarouk0@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#0C0C0C] text-[#D7E2EA] border-t border-[#D7E2EA]/15 pt-20 pb-12 px-6 md:px-10 overflow-hidden relative">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
        
        {/* BIG CONTACT CALLOUT */}
        <FadeIn delay={0} y={30} className="flex flex-col items-center gap-6">
          <span className="px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs uppercase font-mono tracking-widest">
            LET'S WORK TOGETHER
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#D7E2EA] tracking-tight max-w-2xl">
            READY TO BUILD SOMETHING EXTRAORDINARY?
          </h2>
          <p className="text-[#D7E2EA]/70 text-base sm:text-lg max-w-xl font-light">
            Available for full-time roles, cross-platform mobile apps (Flutter &amp; React Native), and front-end engineering projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <ContactButton label="Contact Me" href={`mailto:${email}`} />
            
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/30 bg-[#141414] px-6 py-3 text-sm text-[#D7E2EA] font-medium hover:bg-[#1C1C1C] transition-all"
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-[#D7E2EA]/10 text-left">
          
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#141414]/50 border border-[#D7E2EA]/10">
            <span className="text-xs font-mono text-[#D7E2EA]/50 uppercase flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-purple-400" /> Email
            </span>
            <a href={`mailto:${email}`} className="text-sm font-semibold text-[#D7E2EA] hover:text-purple-300 transition-colors truncate">
              {email}
            </a>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#141414]/50 border border-[#D7E2EA]/10">
            <span className="text-xs font-mono text-[#D7E2EA]/50 uppercase flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-cyan-400" /> Phone
            </span>
            <a href="tel:+201023510831" className="text-sm font-semibold text-[#D7E2EA] hover:text-cyan-300 transition-colors">
              +20 102 351 0831
            </a>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#141414]/50 border border-[#D7E2EA]/10">
            <span className="text-xs font-mono text-[#D7E2EA]/50 uppercase flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5 text-pink-400" /> GitHub
            </span>
            <a href="https://github.com/AhmedGamalFarouk" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#D7E2EA] hover:text-pink-300 transition-colors">
              github.com/AhmedGamalFarouk
            </a>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#141414]/50 border border-[#D7E2EA]/10">
            <span className="text-xs font-mono text-[#D7E2EA]/50 uppercase flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
            </span>
            <a href="https://linkedin.com/in/ahmed-gamal-farouk" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#D7E2EA] hover:text-blue-300 transition-colors">
              Ahmed Gamal Farouk
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & SCROLL TO TOP */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#D7E2EA]/10 text-xs text-[#D7E2EA]/60 font-mono">
          <p>&copy; {new Date().getFullYear()} Ahmed Gamal Farouk. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#D7E2EA]/80 hover:text-white transition-colors group cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <div className="p-2 rounded-full bg-[#141414] border border-[#D7E2EA]/20 group-hover:border-purple-400 transition-colors">
              <ArrowUp className="w-4 h-4 text-purple-400" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
