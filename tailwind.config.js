/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwindScrollbar'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "marquee-reverse": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-reverse": "marquee-reverse 22s linear infinite",
      },
    },
  },
  plugins: [tailwindScrollbar],
}