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
