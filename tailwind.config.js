/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        antol: "`Anton`, sans-serif",
        inter: "`Inter`, sans-serif",
        
      },

    },
  },
  plugins: [],
}

