/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/**"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '450px'
      }
    },
  },
  plugins: [],
}

