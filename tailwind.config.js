/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hub-navy': '#0f172a',
        'hub-accent': '#22d3ee',
      },
    },
  },
  plugins: [],
}