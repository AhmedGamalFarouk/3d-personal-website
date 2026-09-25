import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { SplitText } from '../components/SplitText';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Cross-Platform Mobile Development',
    description:
      'Building robust, high-performance iOS and Android applications using Flutter & React Native with clean architecture, Bloc/Redux state management, and modern UI/UX.',
  },
  {
    number: '02',
    name: 'Front-End Web Development',
    description:
      'Crafting modern, responsive web applications using React, Angular, TypeScript, and Tailwind CSS focused on component architecture and performance optimization.',
  },
  {
    number: '03',
    name: 'Backend Integration & Databases',
    description:
      'Connecting frontend applications to RESTful APIs, Firebase Authentication, Firestore, Realtime Database, and SQLite local persistence.',
  },
  {
    number: '04',
    name: 'Clean Architecture & Version Control',
    description:
      'Implementing clean code practices, feature branching Git workflows, pull requests, and CI/CD concepts to ensure maintainable software delivery.',
  },
  {
    number: '05',
    name: 'UI/UX & Responsive Engineering',
    description:
      'Translating Figma wireframes and mockups into pixel-perfect, interactive web and mobile interfaces with smooth animations and responsive layouts.',
  },
];

export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // The light panel rises and its corners round off as it slides over the dark page
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'start start'] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 26 });
  const scale = useTransform(progress, [0, 1], [0.92, 1]);
  const radius = useTransform(progress, [0, 1], [120, 48]);

  return (
    <motion.section
      id="services"
      ref={sectionRef}
      style={{ scale, borderTopLeftRadius: radius, borderTopRightRadius: radius }}
      className="w-full bg-[#F4F6F8] text-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden relative z-0 origin-top"
    >
      {/* Soft colour wash */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] rounded-full bg-gradient-to-r from-fuchsia-300/30 via-purple-300/25 to-orange-200/30 blur-[100px]" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        {/* HEADING */}
        <div className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn y={10} className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#0C0C0C]/15 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#0C0C0C]/60">
              What I do
            </span>
          </FadeIn>
          <SplitText
            text="EXPERTISE"
            className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-[clamp(3rem,12vw,160px)]"
          />
        </div>

        {/* 5 SERVICE ITEMS */}
        <div className="w-full flex flex-col">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.08} y={40} className="w-full">
              <div
                data-cursor="hover"
                className="relative isolate w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-12 py-8 sm:py-10 md:py-12 px-4 sm:px-6 border-b border-[#0C0C0C]/15 rounded-3xl group overflow-hidden"
              >
                {/* Hover fill wipes up from the bottom */}
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-[#0C0C0C] origin-bottom scale-y-0 transition-transform duration-700 ease-out-expo group-hover:scale-y-100"
                />

                {/* ITEM NUMBER */}
                <div className="font-black text-[clamp(3rem,10vw,140px)] leading-none flex-shrink-0 text-[#0C0C0C] transition-all duration-700 ease-out-expo group-hover:translate-x-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-fuchsia-400 group-hover:via-purple-400 group-hover:to-orange-400">
                  {service.number}
                </div>

                {/* NAME & DESCRIPTION STACKED VERTICALLY */}
                <div className="flex flex-col gap-2 md:gap-3 flex-grow transition-transform duration-700 ease-out-expo group-hover:translate-x-2">
                  <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-tight transition-colors duration-500 group-hover:text-white">
                    {service.name}
                  </h3>
                  <p className="text-[#0C0C0C]/60 font-light leading-relaxed max-w-2xl text-sm sm:text-base md:text-lg transition-colors duration-500 group-hover:text-white/70">
                    {service.description}
                  </p>
                </div>

                <span className="hidden md:flex flex-shrink-0 items-center justify-center w-14 h-14 rounded-full border border-[#0C0C0C]/20 text-[#0C0C0C] transition-all duration-700 ease-out-expo group-hover:border-white/30 group-hover:text-white group-hover:rotate-45 group-hover:bg-white/10">
                  <ArrowUpRight className="w-6 h-6" />
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
