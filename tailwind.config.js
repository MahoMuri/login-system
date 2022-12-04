/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // using skeleton Media Queries, from http://getskeleton.com/#queries
      xs: "280px", // xsmobile
      sm: "400px", // mobile
      md: "550px", // phablet
      lg: "750px", // tablet
      xl: "1000px", // desktop
      "2xl": "1200px", // desktop HD
    },
    extend: {
      colors: {
        login: {
          "dark-green": "#093545",
          green: "#20DF7F",
          gray: "#224957",
        },
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        md: "1.618rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
