/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "mini": "250px",
      "tablet" : "600px",
      "desktop" : "1024px"
    },
    extend: {
      colors:{
        "cinzento" : "#292521"
      }
    },
  },
  plugins: [],
}

