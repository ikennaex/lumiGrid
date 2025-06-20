/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#1164C1",
        customYellow: "#FFAD00",
        
      }
    },
  },
  plugins: [],
}