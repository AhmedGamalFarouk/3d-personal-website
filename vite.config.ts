import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves from /3d-personal-website/; Vercel (which sets VERCEL=1 at build) serves from the root
  base: process.env.VERCEL ? '/' : '/3d-personal-website/',
});
