/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#ffffff',
          secondary: '#b3398b',
          // Define more light mode colors here
        },
        dark: {
          primary: '#1a202c',
          secondary: '#2d3748',
          // Define more dark mode colors here
        },
      },
    },
  },
  plugins: [],
}

