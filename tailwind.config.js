module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      fontFamily: {
        saira: ["Saira", "sans-serif"],
        sairaCondensed: ["Saira Condensed", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "10%": { transform: 1 },
        },
        fadeInLeft: {
          "0%": { transform: "translateX(-40px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        fadeInBottom: {
          "0%": { transform: "translateY(40px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        fadeInLeft: "fadeInLeft 0.75s ease forwards",
        fadeInBottom: "fadeInBottom 0.75s ease forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
