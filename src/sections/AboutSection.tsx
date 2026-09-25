import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { SplitText } from '../components/SplitText';
import { GraduationCap, BookOpen, Award, MapPin, Mail, Phone } from 'lucide-react';

/** Moves its child vertically at a different rate to the page for depth. */
const Parallax: React.FC<{ progress: MotionValue<number>; distance: number; className: string; children: React.ReactNode }> = ({
  progress,
  distance,
  className,
  children,
}) => {
  const y = useTransform(progress, [0, 1], [distance, -distance]);
  const rotate = useTransform(progress, [0, 1], [-8, 8]);
  return (
    <motion.div style={{ y, rotate }} className={`absolute pointer-events-none z-0 ${className}`}>
      {children}
    </motion.div>
  );
};

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.5 });
  const bioText =
    "Results-driven Front-End and Cross-Platform Mobile Developer with proven expertise in Flutter, Dart, React, JavaScript, and TypeScript. Experienced in building responsive, high-performance applications with solid architecture, RESTful API integration, state management (Bloc, Redux), and Firebase services. Computer Science graduate from Future Academy (GPA 3.26/4.0) and published researcher with Springer.";

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#08080A] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-between overflow-hidden"
    >
      {/* 4 FLOATING 3D FIGMA CORNER GRAPHICS */}
      {/* Top-Left 3D Moon Component */}
      <Parallax progress={progress} distance={180} className="top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <motion.img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Asset"
          loading="eager"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [0, -14, 0] }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          viewport={{ once: true }}
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain select-none opacity-90 drop-shadow-[0_25px_40px_rgba(118,33,176,0.35)]"
        />
      </Parallax>

      {/* Bottom-Left 3D Geometric Component */}
      <Parallax progress={progress} distance={120} className="bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <motion.img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Geometric Asset"
          loading="eager"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [0, 14, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.1 },
            scale: { duration: 0.8, delay: 0.1 },
            y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          }}
          viewport={{ once: true }}
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain select-none opacity-90 drop-shadow-[0_25px_40px_rgba(118,33,176,0.35)]"
        />
      </Parallax>

      {/* Top-Right 3D Lego Component */}
      <Parallax progress={progress} distance={220} className="top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <motion.img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Asset"
          loading="eager"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [0, -16, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
          }}
          viewport={{ once: true }}
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain select-none opacity-90 drop-shadow-[0_25px_40px_rgba(118,33,176,0.35)]"
        />
      </Parallax>

      {/* Bottom-Right 3D Sphere Group Component */}
      <Parallax progress={progress} distance={150} className="bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <motion.img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Sphere Group Asset"
          loading="eager"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [0, 16, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            scale: { duration: 0.8, delay: 0.3 },
            y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 },
          }}
          viewport={{ once: true }}
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain select-none opacity-90 drop-shadow-[0_25px_40px_rgba(118,33,176,0.35)]"
        />
      </Parallax>

      {/* 4 CORNER DECORATIVE BADGES (Elevated above 3D graphics) */}
      {/* Top Left: CS Degree */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 hidden lg:flex items-center gap-2.5 glass px-4 py-2.5 rounded-2xl text-xs text-[#D7E2EA] font-mono z-10">
        <GraduationCap className="w-4 h-4 text-purple-400" />
        <span>B.Sc. CS &bull; GPA 3.26/4.0</span>
      </div>

      {/* Top Right: Springer Publication */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 hidden lg:flex items-center gap-2.5 glass px-4 py-2.5 rounded-2xl text-xs text-[#D7E2EA] font-mono z-10">
        <BookOpen className="w-4 h-4 text-cyan-400" />
        <span>Springer Published Researcher</span>
      </div>

      {/* Bottom Left: ITI Certification */}
      <div className="absolute bottom-10 left-6 sm:left-10 hidden lg:flex items-center gap-2.5 glass px-4 py-2.5 rounded-2xl text-xs text-[#D7E2EA] font-mono z-10">
        <Award className="w-4 h-4 text-pink-400" />
        <span>ITI Certified Mobile Dev</span>
      </div>

      {/* Bottom Right: Location */}
      <div className="absolute bottom-10 right-6 sm:right-10 hidden lg:flex items-center gap-2.5 glass px-4 py-2.5 rounded-2xl text-xs text-[#D7E2EA] font-mono z-10">
        <MapPin className="w-4 h-4 text-emerald-400" />
        <span>Cairo, Egypt</span>
      </div>

      {/* CENTER CONTENT WRAPPER */}
      <div className="w-full max-w-5xl my-auto flex flex-col items-center gap-10 sm:gap-14 z-10">
        
        {/* HEADING */}
        <SplitText
          text="ABOUT ME"
          className="w-full text-center font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]"
          charClassName="hero-heading"
        />

        {/* MOBILE BADGES ROW */}
        <div className="flex lg:hidden flex-wrap justify-center gap-2 max-w-lg">
          <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl text-xs text-[#D7E2EA]">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" /> CS Graduate (GPA 3.26)
          </span>
          <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl text-xs text-[#D7E2EA]">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Springer Published
          </span>
          <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl text-xs text-[#D7E2EA]">
            <Award className="w-3.5 h-3.5 text-pink-400" /> ITI Certified
          </span>
          <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl text-xs text-[#D7E2EA]">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Cairo, Egypt
          </span>
        </div>

        {/* SCROLL ANIMATED BIO TEXT */}
        <div className="w-full flex justify-center">
          <AnimatedText text={bioText} />
        </div>

        {/* QUICK STATS & HIGHLIGHTS ROW */}
        <FadeIn delay={0.2} y={30} className="w-full max-w-3xl">
          <div className="rounded-3xl p-px bg-gradient-to-br from-fuchsia-500/50 via-white/10 to-orange-500/40 shadow-[0_30px_80px_-30px_rgba(182,0,168,0.45)]">
          <div className="bg-[#0E0E12]/95 rounded-[23px] p-6 sm:p-8 backdrop-blur-xl flex flex-col gap-6 text-center sm:text-left">
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
