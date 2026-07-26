import React from 'react';
import { FadeIn } from '../components/FadeIn';

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
  return (
    <section
      id="services"
      className="w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden relative z-0"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* HEADING */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-[clamp(3rem,12vw,160px)]">
            EXPERTISE
          </h2>
        </FadeIn>

        {/* 5 SERVICE ITEMS */}
        <div className="w-full flex flex-col">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1} y={30} className="w-full">
              <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 transition-all duration-300 hover:pl-2 group">
                
                {/* ITEM NUMBER */}
                <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                  {service.number}
                </div>

                {/* NAME & DESCRIPTION STACKED VERTICALLY */}
                <div className="flex flex-col gap-2 md:gap-3 flex-grow">
                  <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-tight group-hover:text-purple-900 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-sm sm:text-base md:text-lg opacity-60">
                    {service.description}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
