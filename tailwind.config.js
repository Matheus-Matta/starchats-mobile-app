// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const { colors } = require('./theme.cjs'); // se você usa o theme.cjs que te passei

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')], // v3: ok
  theme: {
    extend: {
      colors, // opcional: expõe sua paleta (text-brand-500, bg-woot-300 etc.)
    },
  },
  plugins: [],
};
