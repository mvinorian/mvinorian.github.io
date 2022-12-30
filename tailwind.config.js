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
  plugins: [],
};
