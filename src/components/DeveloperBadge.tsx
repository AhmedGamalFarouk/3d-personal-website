import React from 'react';
import { Code2, Smartphone, Terminal, Cpu, Sparkles, Layers, Zap, Award } from 'lucide-react';

export const DeveloperBadge: React.FC = () => {
  return (
    <div className="relative group w-full select-none cursor-pointer">
      {/* Background Neon Aura */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-[32px] sm:rounded-[40px] blur-xl opacity-50 group-hover:opacity-85 transition duration-700 group-hover:duration-200 animate-pulse"></div>

      {/* Main Glass Card */}
      <div className="relative bg-[#121318]/90 backdrop-blur-2xl border border-white/15 rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 shadow-2xl overflow-hidden text-left transition-transform duration-500">
        
        {/* Subtle grid pattern background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

        {/* Top Header Row of Badge */}
        <div className="flex items-center justify-between gap-2 mb-4 sm:mb-6 border-b border-white/10 pb-3 sm:pb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
              OPEN FOR HYBRID &amp; REMOTE ROLES
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-[#D7E2EA]/80 font-mono">
            <Terminal className="w-3 h-3 text-purple-400" />
            <span>v2026.4</span>
          </div>
        </div>

        {/* Centerpiece Content Layout */}
        <div className="grid grid-cols-1 gap-4 items-center">
          
          {/* Developer Visual Concept */}
          <div className="relative flex items-center justify-between gap-4 bg-[#0A0B0E] p-4 sm:p-5 rounded-2xl border border-white/10 overflow-hidden">
            {/* Glowing Accent Orbs inside inner container */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center gap-3.5 z-10">
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-tr from-purple-900 via-indigo-800 to-pink-700 p-0.5 shadow-lg">
                  <div className="w-full h-full bg-[#0C0C0C] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                    <Smartphone className="w-7 h-7 sm:w-9 sm:h-9 text-cyan-400 transform -rotate-12" />
                    <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 absolute bottom-1 right-1" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-1 shadow">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-purple-300 font-mono mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>MOBILE &amp; WEB ARCHITECT</span>
                </div>
                <h3 className="text-white font-bold text-base sm:text-xl leading-tight">
                  Ahmed Gamal
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light">
                  Flutter &bull; React &bull; TypeScript
                </p>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end gap-1.5 z-10">
              <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium">
                GPA 3.26 / 4.0
              </span>
              <span className="px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-medium flex items-center gap-1">
                <Award className="w-3 h-3" /> Springer Author
              </span>
            </div>
          </div>

          {/* Floating Tech Badges Grid */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              Flutter &amp; Dart
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              React &amp; Native
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Code2 className="w-3.5 h-3.5 text-purple-400" />
              TypeScript
            </div>
          </div>
        </div>

        {/* Card Footer Micro Bar */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#D7E2EA]/60 font-mono">
          <span>LOCATION: CAIRO, EGYPT</span>
          <span className="text-purple-400 font-semibold uppercase">HOVER / MOVE MOUSE &rarr;</span>
        </div>
      </div>
    </div>
  );
};
