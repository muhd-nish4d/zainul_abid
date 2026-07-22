/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comfortaa', 'cursive'],
        display: ['Comfortaa', 'cursive'],
        mono: ['Comfortaa', 'cursive'],
      },
      colors: {
        accent: '#ff7a1a',
        cream: '#f5e9db',
        parchment: '#171717',
      },
    },
  },
  plugins: [],
};

