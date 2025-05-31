

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        phthaloBlue: {
          400: '#000f89', // You can adjust the hex value as needed
        },
        lightPurple: '#CBC3E3',
      },
    },
  },
  plugins: [],
}