/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "360px",
      md: "768px",
      lg: "1280px",
    },
    extend: {
      colors: {
        primary: {
          black: "#1a130d",
          white: "#fff3e0",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        arsenal: ["var(--font-arsenal)", "serif"],
      },
    },
  },
  plugins: [],
};
