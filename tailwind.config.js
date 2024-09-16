/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blackColor: "#000",
        grayColor: "#F3F3F3",
        activeColor: "#72AEC8"
      },
      fontFamily:{
        secondary: "Jost"
      }
    },
  },
  plugins: [],
}

