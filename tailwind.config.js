/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        phthaloBlue: {
          400: "#000f89",
        },
        lightPurple: "#CBC3E3",
        "novatr-purple": "#7C3AED", // Violet 600
        "novatr-bg": "#F5F3FF", // Violet 50
        "card-dark": "#18181B", // Zinc 900
        "card-light": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
