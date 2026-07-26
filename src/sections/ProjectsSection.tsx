import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';
import { Smartphone, Monitor, Database, Flame, Film, ShoppingBag, Users, CheckCircle2, Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  tags: string[];
  features: string[];
  link?: string;
  github?: string;
  icon: React.ReactNode;
  accentGradient: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Eshtry Menny',
    subtitle: 'Shopping & E-Commerce Mobile App',
    badge: 'Flutter + SQLite + Bloc',
    description:
      'A shopping & e-commerce app featuring user authentication, cart system, product management, SQLite local persistence, and Bloc for state management.',
    tags: ['Mobile App', 'E-Commerce', 'Local Database', 'Bloc State Management'],
    features: ['Offline-First SQLite Cache', 'Bloc Reactive Architecture', 'Cart & Order Management', 'Smooth Animations'],
    link: 'https://github.com/AhmedGamalFarouk',
    github: 'https://github.com/AhmedGamalFarouk',
    icon: <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />,
    accentGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    title: 'Circle & Circle-Mobile',
    subtitle: 'Event Planning & Social Coordination',
    badge: 'React + React Native + Firebase',
    description:
      'A full-featured mobile & web event planning platform designed to combat social drift, featuring authentication, real-time channels, group activity coordination, Tailwind CSS, and Firebase Firestore.',
    tags: ['Web & Mobile', 'Real-time Messaging', 'Firebase', 'Tailwind CSS'],
    features: ['Cross-Platform Web & iOS/Android', 'Firebase Firestore Realtime Sync', 'Event Scheduling & RSVPs', 'Custom Channel Creation'],
    link: 'https://github.com/AhmedGamalFarouk',
    github: 'https://github.com/AhmedGamalFarouk',
    icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />,
    accentGradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
  {
    title: 'Cinema Flux & Movie Land',
    subtitle: 'Futuristic Entertainment Explorer',
    badge: 'React + React Native + Redux Toolkit',
    description:
      'A futuristic movie explorer platform built with React, Redux Toolkit, Vite, and React Native featuring API integrations, category filtering, favorites system, and sleek interface design.',
    tags: ['Movie Explorer', 'Redux Toolkit', 'REST API', 'Web & Mobile'],
    features: ['Redux State Persistence', 'TMDB REST API Integration', 'Responsive Dark UI', 'Mobile & Desktop Responsive'],
    link: 'https://github.com/AhmedGamalFarouk',
    github: 'https://github.com/AhmedGamalFarouk',
    icon: <Film className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400" />,
    accentGradient: 'from-pink-500/20 via-orange-500/10 to-transparent',
  },
];

const ADDITIONAL_PROJECTS = [
  {
    title: 'Social Media App',
    tech: 'Flutter + Firebase',
    desc: 'Feature-rich social platform with user posts, comments, likes, real-time messaging, and media uploads.',
    icon: <Flame className="w-5 h-5 text-orange-400" />,
    github: 'https://github.com/AhmedGamalFarouk',
  },
  {
    title: 'Orderly',
    tech: 'React + Firebase Firestore',
    desc: 'Sleek order and workflow management dashboard with real-time analytics and inventory status.',
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    github: 'https://github.com/AhmedGamalFarouk',
  },
];

interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: any;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards, progress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate scale target for sticky stacking effect
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-24 md:top-28 h-[82vh] sm:h-[85vh] flex items-center justify-center mb-8"
      style={{
        top: `${index * 28 + 80}px`,
      }}
    >
      <motion.div
        style={{ scale }}
        className={`w-full max-w-5xl h-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl relative group`}
      >
        {/* Ambient Gradient Corner Glow */}
        <div className={`absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br ${project.accentGradient} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700`}></div>

        {/* TOP ROW: ICON, BADGE, INDEX */}
        <div className="flex items-center justify-between gap-4 z-10">
          <div className="flex items-center gap-3">
            <div className="p-3 sm:p-4 rounded-2xl bg-[#141414] border border-[#D7E2EA]/20">
              {project.icon}
            </div>
            <div>
              <span className="px-3.5 py-1 rounded-full bg-[#D7E2EA]/10 border border-[#D7E2EA]/30 text-xs sm:text-sm text-[#D7E2EA] font-mono font-medium">
                {project.badge}
              </span>
              <p className="text-xs text-[#D7E2EA]/60 uppercase tracking-widest mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          <span className="font-black text-[#D7E2EA]/20 text-3xl sm:text-5xl md:text-6xl font-mono">
            0{index + 1}
          </span>
        </div>

        {/* MIDDLE SECTION: TITLE & DESCRIPTION & FEATURES */}
        <div className="my-auto z-10 flex flex-col gap-4 sm:gap-6">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#D7E2EA] tracking-tight">
            {project.title}
          </h3>

          <p className="text-[#D7E2EA]/80 font-light text-base sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* KEY FEATURES BULLETS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {project.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* TAGS PILLS */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="bg-[#141414] border border-[#D7E2EA]/20 text-[#D7E2EA]/90 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#D7E2EA]/15 z-10">
          <LiveProjectButton label="View Project" href={project.link} />

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/70 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">Source Code</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-24 px-5 sm:px-8 md:px-10 z-10 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* HEADING */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20">
          <h2 className="hero-heading font-black uppercase tracking-tight leading-none text-[clamp(3rem,12vw,160px)]">
            PROJECTS
          </h2>
        </FadeIn>

        {/* STICKY STACKING CARDS WRAPPER */}
        <div className="w-full relative flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {/* ADDITIONAL HIGHLIGHT PROJECTS */}
        <div className="w-full pt-20 mt-10 border-t border-[#D7E2EA]/20">
          <FadeIn delay={0} y={20} className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#D7E2EA] flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-purple-400" />
              More Highlighted Works
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADDITIONAL_PROJECTS.map((addProj, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} y={20}>
                <div className="bg-[#141414] border border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-4 transition-all duration-300 hover:border-[#D7E2EA]/50 hover:bg-[#181818] group">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/15">
                        {addProj.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#D7E2EA] group-hover:text-purple-300 transition-colors">
                          {addProj.title}
                        </h4>
                        <span className="text-xs text-purple-400 font-mono">
                          {addProj.tech}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                    {addProj.desc}
                  </p>

                  <div className="pt-2 flex justify-end">
                    <a
                      href={addProj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#D7E2EA] font-semibold hover:text-purple-300 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> Repository &rarr;
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
