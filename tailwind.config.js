/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--tw-color-primary) / <alpha-value>)",
        secondary: "rgb(var(--tw-color-secondary) / <alpha-value>)",
        accent: "rgb(var(--tw-color-accent) / <alpha-value>)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  plugins: [],
};
