
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
}
module.exports = nextConfig

{
  "name": "landscapepro",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@react-three/fiber": "^8.17.10",
    "@react-three/drei": "^9.109.2",
    "three": "^0.167.1",
    "framer-motion": "^11.3.31",
    "zustand": "^4.5.5",
    "tailwindcss": "^3.4.7",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.41",
    "@anthropic-ai/sdk": "^0.26.1"
  }
}

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg0: '#0a0c10',
        bg1: '#0e1116',
        bg2: '#13161d',
        bg3: '#181c25',
        bg4: '#1d2230',
        brd: '#252c3d',
        brd2: '#2e3850',
        acc: '#00d4aa',
        acc2: '#4f8fff',
        acc3: '#f0b429',
        acc4: '#e05c5c',
        txt: '#dde4f0',
        txt2: '#7a8aaa',
        txt3: '#4a5570',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

{
  "framework": "nextjs",
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "env": {
    "ANTHROPIC_API_KEY": "@anthropic-api-key"
  }
}
