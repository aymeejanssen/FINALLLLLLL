/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/main.js" // <-- this is key
  ],
  theme: {
    extend: {
      colors: {
        peach: { 100: '#fff5f0' },
        lavender: { 100: '#f5f3ff' },
        yellow: { 100: '#fffce0' },
      },
    },
  },
  plugins: [],
};
