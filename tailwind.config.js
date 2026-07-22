/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        accent: '#7ED957',
        cream: '#f7efe6',
        parchment: '#fdf6eb',
      },
    },
  },
  plugins: [],
};

