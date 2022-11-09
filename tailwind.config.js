module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "spartan-red": "#fb2715"
      },
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
          "100%": { opacity: 1 },
        },
        fadeInLeft: {
          "0%": { transform: "translateX(-40px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        fadeInRight: {
          "0%": { transform: "translateX(40px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        fadeInBottom: {
          "0%": { transform: "translateY(40px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        disappearLeft: {
            "0%": { transform: "translateX(0px)", opacity: 1 },
            "100%": { transform: "translateX(-40px)", opacity: 0 },
        }
      },
      animation: {
        fadeIn: "fadeIn 0.45s ease forwards",
        fadeInLeft: "fadeInLeft 0.45s ease forwards",
        fadeInRight: "fadeInRight 0.45s ease forwards",
        fadeInBottom: "fadeInBottom 0.45s ease forwards",
        disappearLeft: "disappearLeft 0.45s ease forwards",
      },
      maxHeight: {
        '6/12': '50%',
        '5/12': '42%',
        '4/12': '30%',
        '35': '35%'
      },
      scale: {
        '80': '0.8',
        '120': '1.2',
      },
      dropShadow: {
        'white': '0 0 4px rgba(255,255,255,0.9)'
      }
    },
  },
  plugins: [],
};
