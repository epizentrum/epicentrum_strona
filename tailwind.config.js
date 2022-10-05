/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xxs': '150px',
      'xs': '250px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '4k': '2000px',
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "pablo-pink": "#f72585",
        "pablo-purple": "#720987",
        "pablo-grenade": "#3a0ca3",
        "pablo-blue": "#4361ee",
        "pablo-sea": "#4cc9f0",
        "pablo-violet-pink": "#a21090",
      },
    },
    keyframes: {
      slideLeft: {
        "0%": { transform: "translateX(50px)", opacity: "0" },
        "100%:": { transform: "translateX(0px)", opacity: "1" },
      },
      slideRight: {
        "0%": { transform: "translateX(-500px)", opacity: "0" },
        "100%:": { transform: "translateX(0px)", opacity: "1" },
      },
      slideRightMobile: {
        "0%": { transform: "translateX(-200px)", opacity: "0" },
        "100%:": { transform: "translateX(0px)", opacity: "1" },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "100%:": { opacity: "1" },
      },
      fadeInSubsite: {
        "0%": { transform: "translateY(100px)", opacity: "0" },
        "100%:": { transform: "translateX(0px)", opacity: "1" },
      },
    },
    animation: {
      slideLeft: "slideLeft 1s ease-in-out",
      slideRight: "slideRight 1s ease-in-out",
      slideRightMobile: "slideRightMobile 1s ease-in-out",
      fadeIn: "fadeIn 2s",
      fadeInSubsite: "fadeInSubsite 1s ease-in-out",
    },
    container: {
      center: true,
      padding: "4rem",
    },
  },
  plugins: [],
};
