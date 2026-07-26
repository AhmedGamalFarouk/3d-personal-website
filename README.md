# Ahmed Gamal Farouk -- Personal Portfolio Website

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3-cyan.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-purple.svg)

> **Front-End & Cross-Platform Mobile Developer** portfolio landing page for **Ahmed Gamal Farouk**, built with React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

---

## 🌟 Overview & Features

- **🎨 Modern Dark Aesthetic**: Pure `#0C0C0C` background, typography powered by **Kanit** (Google Fonts), and gradient header styling (`.hero-heading`).
- **🧲 Interactive Physics & Cursor Tracking**: Mouse-following magnetic effect (`Magnet`) wrapping a glassmorphic developer centerpiece card (`DeveloperBadge`).
- **🔄 Dual-Row Scroll Marquee**: Dynamic opposing-direction tech stack marquees driven by page scroll position.
- **📜 Character-by-Character Scroll Reveal**: Smooth character-level text opacity reveal (`AnimatedText`) powered by Framer Motion `useScroll`.
- **💼 Interactive Core Expertise**: Clean white-card section (`#FFFFFF`) with top rounded corners (`rounded-t-[60px]`) displaying numbered service items (`01` -- `05`).
- **🎴 Sticky Stacking Project Cards**: 3D stacking card interaction scaling down as you scroll past flagship projects (*Eshtry Menny*, *Circle & Circle-Mobile*, *Cinema Flux & Movie Land*).
- **📋 Copy Email & Direct Links**: Instant clipboard copy action for `ahmedgamalfarouk0@gmail.com` with real-time feedback toast, plus quick social links.

---

## 🚀 Tech Stack

- **Framework**: React 18 & TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS & Vanilla CSS (Custom Design System)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Kanit (Google Fonts)

---

## 📂 Project Structure

```
3d personal website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AnimatedText.tsx      # Character-by-character scroll reveal text
│   │   ├── ContactButton.tsx     # Custom 123deg gradient pill button with inner shadow
│   │   ├── DeveloperBadge.tsx    # Glassmorphic developer card centerpiece
│   │   ├── FadeIn.tsx            # Framer Motion scroll entrance wrapper
│   │   ├── Footer.tsx            # Footer, email copy, and back-to-top action
│   │   ├── LiveProjectButton.tsx # Ghost outline project button
│   │   └── Magnet.tsx            # Mouse-following magnetic cursor component
│   ├── sections/
│   │   ├── HeroSection.tsx       # Hero header, navigation, centerpiece & bottom spec
│   │   ├── MarqueeSection.tsx    # Dual-row scroll-driven tech marquee
│   │   ├── AboutSection.tsx      # Corner badges, animated bio & publication tag
│   │   ├── ServicesSection.tsx   # White background expertise items (01 - 05)
│   │   └── ProjectsSection.tsx   # Sticky stacking cards & highlighted works
│   ├── App.tsx                   # Main portfolio view layout assembly
│   ├── index.css                 # Global resets & gradient text styling
│   └── main.tsx                  # React DOM root entry
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

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

- **Name**: Ahmed Gamal Farouk
- **Role**: Front-End & Cross-Platform Mobile Developer (Flutter, React, React Native, TypeScript)
- **Email**: [ahmedgamalfarouk0@gmail.com](mailto:ahmedgamalfarouk0@gmail.com)
- **Phone**: +20 102 351 0831
- **Location**: Cairo, Egypt
- **GitHub**: [github.com/AhmedGamalFarouk](https://github.com/AhmedGamalFarouk)
- **LinkedIn**: [Ahmed Gamal Farouk](https://linkedin.com/in/ahmed-gamal-farouk)
