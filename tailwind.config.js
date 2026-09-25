/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#08080A",
        lightText: "#D7E2EA",
        cardBg: "#121216",
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '100%': { transform: 'translateX(220%) skewX(-20deg)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(4%, -6%, 0) scale(1.08)' },
        },
      },
      animation: {
        shine: 'shine 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
        'spin-slow': 'spin-slow 8s linear infinite',
        drift: 'drift 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
