/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3a3a3a',
          DEFAULT: '#1a1a1a',
          dark: '#0d0d0d',
        },
        secondary: {
          light: '#4b5563',
          DEFAULT: '#374151',
          dark: '#1f2937',
        },
      },
    },
  },
  plugins: [],
}
