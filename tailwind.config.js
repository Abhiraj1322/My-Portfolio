/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' for auto based on system
  theme: {
    extend: {
      colors: {
        darkGreen: "#051b11",
        neonGreen: "#00ff99",
        gridLines: "rgba(0,255,0,0.1)",
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
};
