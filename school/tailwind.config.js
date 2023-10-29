/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        Teal:"#2F6C6D",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#87CEEB",
        gray: "#4B4B4C"
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%, 100%": "translateX(5%)",
          "50%": {transform: "translateX(-120%)"}
        }
      }
    }
  },
  screens: {
    xs: "480px",
    sm: "760px",
    md: "1060px",
  },
  plugins: [],
}                              
