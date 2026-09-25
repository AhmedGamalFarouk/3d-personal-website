import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';
import { SplitText } from '../components/SplitText';
import { TiltCard } from '../components/TiltCard';
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
  rim: string;
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
    rim: 'from-cyan-400/70 via-white/10 to-blue-500/50',
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
    rim: 'from-fuchsia-500/70 via-white/10 to-purple-500/50',
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
    rim: 'from-pink-500/70 via-white/10 to-orange-500/50',
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
  progress: MotionValue<number>;
}

/** Feeds the pointer position into CSS variables for the `.spotlight` glow. */
const trackSpotlight = (e: React.PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards, progress }) => {
  // Earlier cards shrink and dim as later ones stack on top of them
  const targetScale = 1 - (totalCards - 1 - index) * 0.05;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);
  const dim = useTransform(progress, [index / totalCards, 1], [0, (totalCards - 1 - index) * 0.25]);

  return (
    <div
      className="sticky h-[80svh] sm:h-[85vh] flex items-center justify-center mb-8"
      style={{
        top: `${index * 28 + 80}px`,
      }}
    >
      <motion.div style={{ scale }} className="w-full max-w-5xl h-full origin-top">
        <TiltCard maxTilt={4} glare={false} className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
          <div className={`w-full h-full p-px rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-gradient-to-br ${project.rim} shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]`}>
            <div
              onPointerMove={trackSpotlight}
              className="spotlight w-full h-full bg-[#0B0B0F] rounded-[39px] sm:rounded-[49px] md:rounded-[59px] p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Ambient Gradient Corner Glow */}
              <div className={`absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-gradient-to-br ${project.accentGradient} rounded-full blur-3xl pointer-events-none transition-transform duration-1000 ease-out-expo group-hover:scale-125`}></div>
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)] pointer-events-none" />

              {/* TOP ROW: ICON, BADGE, INDEX */}
              <div className="flex items-center justify-between gap-4 z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 sm:p-4 rounded-2xl glass transition-transform duration-700 ease-out-expo group-hover:-rotate-6 group-hover:scale-110">
                    {project.icon}
                  </div>
                  <div>
                    <span className="inline-block px-3 sm:px-3.5 py-1 rounded-full bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 text-[10px] sm:text-sm text-[#D7E2EA] font-mono font-medium">
                      {project.badge}
                    </span>
                    <p className="text-xs text-[#D7E2EA]/60 uppercase tracking-widest mt-1.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <span className="font-black text-outline text-4xl sm:text-6xl md:text-7xl">
                  0{index + 1}
                </span>
              </div>

              {/* MIDDLE SECTION: TITLE & DESCRIPTION & FEATURES */}
              <div className="my-auto z-10 flex flex-col gap-4 sm:gap-6">
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#D7E2EA] tracking-tight">
                  {project.title}
                </h3>

                <p className="text-[#D7E2EA]/75 font-light text-sm sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                {/* KEY FEATURES BULLETS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/90 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-fuchsia-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* TAGS PILLS */}
                <div className="hidden sm:flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-white/[0.04] border border-white/10 text-[#D7E2EA]/90 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTTOM ACTION BUTTONS */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10 z-10">
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

              {/* Stacking shade */}
              <motion.div aria-hidden style={{ opacity: dim }} className="absolute inset-0 bg-black pointer-events-none z-20" />
            </div>
          </div>
        </TiltCard>
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
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative w-full bg-[#08080A] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-24 px-5 sm:px-8 md:px-10 z-10 border-t border-white/10 shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* HEADING */}
        <SplitText
          text="PROJECTS"
          className="w-full text-center mb-16 sm:mb-20 font-black uppercase tracking-tight leading-none text-[clamp(3rem,12vw,160px)]"
          charClassName="hero-heading"
        />

        {/* STICKY STACKING CARDS WRAPPER */}
        <div className="w-full relative flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={progress}
            />
          ))}
        </div>

        {/* ADDITIONAL HIGHLIGHT PROJECTS */}
        <div className="w-full pt-20 mt-10 border-t border-white/10">
          <FadeIn delay={0} y={20} className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#D7E2EA] flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-purple-400" />
              More Highlighted Works
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADDITIONAL_PROJECTS.map((addProj, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} y={20}>
                <div
                  onPointerMove={trackSpotlight}
                  className="spotlight relative overflow-hidden glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-4 transition-all duration-700 ease-out-expo hover:-translate-y-1.5 hover:border-fuchsia-400/30 hover:shadow-[0_30px_60px_-20px_rgba(182,0,168,0.35)] group"
                >
                  <div className="relative flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="relative p-3 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/15">
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

                  <p className="relative text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                    {addProj.desc}
                  </p>

                  <div className="relative pt-2 flex justify-end">
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
