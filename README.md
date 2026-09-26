# Ahmed Gamal Farouk -- Personal Portfolio Website

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3-cyan.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple.svg)
![Three.js](https://img.shields.io/badge/Three.js-0.170-black.svg)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black.svg)

> **Front-End & Cross-Platform Mobile Developer** portfolio for **Ahmed Gamal Farouk**, built with React, TypeScript, Tailwind CSS, Framer Motion and a real-time WebGL hero scene (Three.js / React Three Fiber).

**Live:** [3d-personal-website-beryl.vercel.app](https://3d-personal-website-beryl.vercel.app)

---

## 🌟 Overview & Features

- **🌌 WebGL Hero Scene**: A noise-displaced, iridescent 3D orb in the brand gradient (magenta → violet → cyan → ember) surrounded by a twinkling particle field. It reacts to the pointer and to scroll, is lazy-loaded with a CSS orb fallback, and stops rendering once the hero leaves the screen.
- **🧈 Inertial Smooth Scrolling**: Page-wide smooth scrolling via **Lenis**, with smooth anchor navigation.
- **🧭 Floating Glass Navbar**: Pill-shaped navigation with a sliding active-section indicator that tucks away while scrolling down, plus a gradient scroll-progress bar.
- **🖱️ Custom Cursor & Micro-interactions**: Dot-and-ring cursor that swells over interactive elements (desktop only), spring-based magnetic buttons, shine sweeps and a 3D tilt card with glare for the developer badge.
- **🔤 3D Letter Reveals**: Section headings rise and rotate into place letter by letter (`SplitText`); content blurs in on scroll (`FadeIn`).
- **🔄 Velocity Marquee**: Continuously drifting tech-stack rows that speed up or reverse with scroll velocity — large solid/outlined display type over glass chips.
- **📜 Character-by-Character Scroll Reveal**: Bio text lights up as you scroll (`AnimatedText`), with parallax-drifting 3D assets around it.
- **💼 Interactive Expertise Panel**: A light panel that scales in as it slides over the page; each service row fills dark with a gradient number on hover.
- **🎴 Sticky Stacking Project Cards**: Gradient-rimmed cards with a cursor-following spotlight that scale and dim as the next project stacks on top (*Eshtry Menny*, *Circle & Circle-Mobile*, *Cinema Flux & Movie Land*).
- **📋 Copy Email & Direct Links**: One-click clipboard copy with live feedback, glass contact cards and an oversized signature footer.
- **♿ Reduced Motion Aware**: Smooth scrolling, the custom cursor and the 3D animation are disabled for users who prefer reduced motion.

---

## 🚀 Tech Stack

- **Framework**: React 18 & TypeScript
- **Bundler**: Vite
- **3D**: Three.js + React Three Fiber (custom GLSL shaders)
- **Styling**: Tailwind CSS & custom CSS layer (glass, spotlight, grain)
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Typography**: Kanit & JetBrains Mono (Google Fonts)

---

## 📂 Project Structure

```
3d-personal-website/
├── src/
│   ├── components/
│   │   ├── three/
│   │   │   └── HeroScene.tsx     # WebGL orb + particle field (lazy-loaded)
│   │   ├── AnimatedText.tsx      # Character-by-character scroll reveal text
│   │   ├── ContactButton.tsx     # Gradient pill CTA with shine + magnet
│   │   ├── CustomCursor.tsx      # Desktop dot-and-ring cursor
│   │   ├── DeveloperBadge.tsx    # Glassmorphic developer card centerpiece
│   │   ├── FadeIn.tsx            # Blur/slide scroll entrance wrapper
│   │   ├── Footer.tsx            # Contact callout, links, signature, back-to-top
│   │   ├── LiveProjectButton.tsx # Outline button with fill-up hover
│   │   ├── Magnet.tsx            # Spring-based magnetic pull toward the cursor
│   │   ├── Navbar.tsx            # Floating glass nav with active-section pill
│   │   ├── ScrollProgress.tsx    # Gradient scroll progress bar
│   │   ├── SplitText.tsx         # Letter-by-letter 3D heading reveal
│   │   └── TiltCard.tsx          # Pointer-driven 3D tilt with glare
│   ├── lib/
│   │   └── smoothScroll.ts       # Lenis setup + scrollToTarget helper
│   ├── sections/
│   │   ├── HeroSection.tsx       # 3D scene, heading, badge & CTA
│   │   ├── MarqueeSection.tsx    # Velocity-reactive tech marquee
│   │   ├── AboutSection.tsx      # Parallax assets, animated bio & publication
│   │   ├── ServicesSection.tsx   # Expertise items (01 - 05)
│   │   └── ProjectsSection.tsx   # Sticky stacking cards & highlighted works
│   ├── App.tsx                   # Layout assembly + global chrome
│   ├── index.css                 # Global styles, design utilities, grain
│   └── main.tsx                  # React DOM root entry
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AhmedGamalFarouk/3d-personal-website.git
   cd 3d-personal-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Then open [http://localhost:5173/3d-personal-website/](http://localhost:5173/3d-personal-website/).

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌍 Deployment

The site builds with a different base path depending on where it is hosted (see `vite.config.ts`):

- **Vercel** — Vercel sets `VERCEL=1` during the build, so the app is served from `/`. Use the **Vite** framework preset (build command `npm run build`, output directory `dist`).
- **GitHub Pages** — every other build uses `/3d-personal-website/`. Pushing to `main` runs `.github/workflows/deploy.yml`, or deploy manually with `npm run deploy`.

---

## 📬 Contact & Connect

- **Name**: Ahmed Gamal Farouk
- **Role**: Front-End & Cross-Platform Mobile Developer (Flutter, React, React Native, TypeScript)
- **Email**: [ahmedgamalfarouk0@gmail.com](mailto:ahmedgamalfarouk0@gmail.com)
- **Phone**: +20 102 351 0831
- **Location**: Cairo, Egypt
- **GitHub**: [github.com/AhmedGamalFarouk](https://github.com/AhmedGamalFarouk)
- **LinkedIn**: [Ahmed Gamal Farouk](https://linkedin.com/in/ahmed-gamal-farouk)
