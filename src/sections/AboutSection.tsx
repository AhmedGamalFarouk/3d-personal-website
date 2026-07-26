import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { GraduationCap, BookOpen, Award, MapPin, Mail, Phone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const bioText =
    "Results-driven Front-End and Cross-Platform Mobile Developer with proven expertise in Flutter, Dart, React, JavaScript, and TypeScript. Experienced in building responsive, high-performance applications with solid architecture, RESTful API integration, state management (Bloc, Redux), and Firebase services. Computer Science graduate from Future Academy (GPA 3.26/4.0) and published researcher with Springer.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-between overflow-hidden"
    >
      {/* 4 CORNER DECORATIVE BADGES */}
      {/* Top Left: CS Degree */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 hidden md:flex items-center gap-2.5 bg-[#141414]/80 backdrop-blur-md border border-[#D7E2EA]/15 px-4 py-2.5 rounded-2xl text-xs text-[#D7E2EA]/80 font-mono">
        <GraduationCap className="w-4 h-4 text-purple-400" />
        <span>B.Sc. CS &bull; GPA 3.26/4.0</span>
      </div>

      {/* Top Right: Springer Publication */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 hidden md:flex items-center gap-2.5 bg-[#141414]/80 backdrop-blur-md border border-[#D7E2EA]/15 px-4 py-2.5 rounded-2xl text-xs text-[#D7E2EA]/80 font-mono">
        <BookOpen className="w-4 h-4 text-cyan-400" />
        <span>Springer Published Researcher</span>
      </div>

      {/* Bottom Left: ITI Certification */}
      <div className="absolute bottom-10 left-6 sm:left-10 hidden md:flex items-center gap-2.5 bg-[#141414]/80 backdrop-blur-md border border-[#D7E2EA]/15 px-4 py-2.5 rounded-2xl text-xs text-[#D7E2EA]/80 font-mono">
        <Award className="w-4 h-4 text-pink-400" />
        <span>ITI Certified Mobile Dev</span>
      </div>

      {/* Bottom Right: Location */}
      <div className="absolute bottom-10 right-6 sm:right-10 hidden md:flex items-center gap-2.5 bg-[#141414]/80 backdrop-blur-md border border-[#D7E2EA]/15 px-4 py-2.5 rounded-2xl text-xs text-[#D7E2EA]/80 font-mono">
        <MapPin className="w-4 h-4 text-emerald-400" />
        <span>Cairo, Egypt</span>
      </div>

      {/* CENTER CONTENT WRAPPER */}
      <div className="w-full max-w-5xl my-auto flex flex-col items-center gap-10 sm:gap-14">
        
        {/* HEADING */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            ABOUT ME
          </h2>
        </FadeIn>

        {/* MOBILE BADGES ROW (for smaller screens) */}
        <div className="flex md:hidden flex-wrap justify-center gap-2 max-w-lg">
          <span className="flex items-center gap-1.5 bg-[#141414] border border-[#D7E2EA]/20 px-3 py-1.5 rounded-xl text-xs text-[#D7E2EA]">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" /> CS Graduate (GPA 3.26)
          </span>
          <span className="flex items-center gap-1.5 bg-[#141414] border border-[#D7E2EA]/20 px-3 py-1.5 rounded-xl text-xs text-[#D7E2EA]">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Springer Published
          </span>
          <span className="flex items-center gap-1.5 bg-[#141414] border border-[#D7E2EA]/20 px-3 py-1.5 rounded-xl text-xs text-[#D7E2EA]">
            <Award className="w-3.5 h-3.5 text-pink-400" /> ITI Certified
          </span>
          <span className="flex items-center gap-1.5 bg-[#141414] border border-[#D7E2EA]/20 px-3 py-1.5 rounded-xl text-xs text-[#D7E2EA]">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Cairo, Egypt
          </span>
        </div>

        {/* SCROLL ANIMATED BIO TEXT */}
        <div className="w-full flex justify-center">
          <AnimatedText text={bioText} />
        </div>

        {/* QUICK STATS & HIGHLIGHTS ROW */}
        <FadeIn delay={0.2} y={30} className="w-full max-w-3xl">
          <div className="bg-[#141414]/90 border border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col gap-6 text-center sm:text-left">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-[#D7E2EA]/10 pb-6 text-sm">
              <div className="flex flex-col items-center sm:items-start gap-1">
                <span className="text-[#D7E2EA]/50 text-xs uppercase font-mono flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Location
                </span>
                <span className="font-semibold text-[#D7E2EA]">Cairo, Egypt</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-1">
                <span className="text-[#D7E2EA]/50 text-xs uppercase font-mono flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" /> Email
                </span>
                <a href="mailto:ahmedgamalfarouk0@gmail.com" className="font-semibold text-[#D7E2EA] hover:text-purple-400 transition-colors">
                  ahmedgamalfarouk0@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-1">
                <span className="text-[#D7E2EA]/50 text-xs uppercase font-mono flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> Phone
                </span>
                <a href="tel:+201023510831" className="font-semibold text-[#D7E2EA] hover:text-purple-400 transition-colors">
                  +20 102 351 0831
                </a>
              </div>
            </div>

            {/* Publication Feature */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#D7E2EA]/80">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#D7E2EA] uppercase tracking-wider block mb-0.5">Publication</span>
                  <p className="italic text-[#D7E2EA]/70">
                    "A Systematic Literature Review of Optimization Algorithms for The University Course Timetabling Problem" &bull; <span className="font-medium text-cyan-300">Springer (2024)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* BUTTON BLOCK BELOW TEXT BLOCK */}
        <FadeIn delay={0.4} y={20} className="mt-2">
          <ContactButton label="Contact Me" href="mailto:ahmedgamalfarouk0@gmail.com" />
        </FadeIn>
      </div>
    </section>
  );
};
