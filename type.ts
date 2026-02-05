/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'hub-navy': '#0f172a',
        'hub-blue': '#1e293b',
        'hub-accent': '#22d3ee', // Cyan for AI highlights
      },
    },
  },
  plugins: [],
}