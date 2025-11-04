/** @type {import('tailwindcss').Config} */


import tailwindScrollbar from 'tailwindScrollbar'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        fontFamily:{

            Inter: ['Inter', 'sans-serif'],
           
        }
    },
  },
  plugins: [tailwindScrollbar],
}
