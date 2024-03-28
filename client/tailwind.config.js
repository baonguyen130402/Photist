/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "25": "#252525",
        "30": "#303030",
        "f5": "#f5f5f5",
        "c6": "#c6c6c6",
        "05": "#050505",
        "ccc": "#ccc",
        "semiBlue": "#3a99ad",
      },
      fontFamily: {
        "sans": ["manrope", "sans-serif"],
      },
      fontSize: {
        "4.5xl": "38px",
        "3.5xl": "2.5rem",
        "5.5xl": "3.23rem",
      },
      transitionDelay: {
        "250": "250ms",
        "750": "750ms",
      },
      keyframes: {
        slideUp: {
          "0%": {
            transform: "translateY(3%)",
            opacity: "0",
          },
          "15%": {
            transform: "translateY(1.0999999999999996%)",
            opacity: "1",
          },
          "85%": {
            transform: "translateY(-1.0999999999999996%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-3%)",
            opacity: "0",
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-2%)",
            opacity: "0",
          },
          "15%": {
            transform: "translateY(-.8%)",
            opacity: "1",
          },
          "85%": {
            transform: "translateY(.8%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(2%)",
            opacity: "0",
          },
        },
        loading: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        fadeIn: {
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.8",
          },
          "100%": {
            opacity: "0.6",
          },
        },
      },
      animation: {
        "sliding-up": "slideUp 20s linear infinite",
        "sliding-down": "slideDown 20s linear infinite",
        "loading": "loading 1s ease infinite",
        "fadein": "fadeIn 1s linear",
        "fadeout": "fadeOut 0.8s linear 1",
      },
      height: {
        "300": "299.7px",
      },
    },
  },
  plugins: [],
};
