/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
       screens: {
      xxs: "150px",
      xs: "250px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontSize: {},
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
        "black-bg": "#111111",
        "loading-gray": "#6F6F6F",
        "violet-light": "#7124B5",
        "violet-dark": "#35095B",
      },
    },
    keyframes: {
      slideLeft: {
        "0%": { transform: "translateY(10px)", opacity: "0" },
        "100%:": { transform: "translateY(0px)", opacity: "1" },
      },
      slideRight: {
        "0%": { transform: "translateX(-300px)", opacity: "0" },
        "100%:": { transform: "translateX(0px)", opacity: "1" },
      },
      slideRightMobile: {
        "0%": { transform: "translateX(-200px)", opacity: "0" },
        "100%:": { transform: "translateX(0px)", opacity: "1" },
      },
      slideLeftMobile: {
        "0%": { transform: "translateX(50px)", opacity: "0" },
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
      loading_bar: {
        "0%": { width: "0" },
        "33%": { width: "15%" },
        "66%": { width: "60%" },
        "100%": { width: "100%" },
      },
      pulse_1: {
        "0%": { opacity: "0" },
        "100%": { opacity: "100%" },
      },
      pulse_2: {
        "0%": { opacity: "0" },
        "100%": { opacity: "75%" },
      },
      pulse_3: {
        "0%": { opacity: "0" },
        "100%": { opacity: "50%" },
      },
    },
    animation: {
      slideLeft: "slideLeft 1s ease-in-out",
      slideRight: "slideRight 1s ease-in-out",
      slideRightMobile: "slideRightMobile 1s ease-in-out",
      slideLeftMobile: "slideLeftMobile 1s ease-in-out",
      fadeIn: "fadeIn 2s",
      fadeInSubsite: "fadeInSubsite 1s ease-in-out",
      loading_bar: "loading_bar 3s ease forwards",
      pulse_1: "pulse_1 1s cubic-bezier(0.4, 0, 0.6, 1) 0s forwards",
      pulse_2: "pulse_2 1s cubic-bezier(0.4, 0, 0.6, 1) 1s forwards",
      pulse_3: "pulse_3 1s cubic-bezier(0.4, 0, 0.6, 1) 2s forwards",
    },
    container: {
      center: true,
      padding: "4rem",
    },
  },
  plugins: [],
};
