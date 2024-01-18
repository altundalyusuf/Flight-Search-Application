/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        }
      },
      animation: {
        fadeInOneSec: "fadeIn 1s ease-in-out",
        fadeInOneHalfSec: "fadeIn 1.5s ease-in-out",
        fadeInTwoSec: "fadeIn 2s ease-in-out",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}