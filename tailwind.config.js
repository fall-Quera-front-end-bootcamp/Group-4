/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,cjs,mjs,ts,js,jsx,ts,tsx}"],
  
  theme: {

      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },

    extend: {
      colors: {
        customBlue: 'rgba(32, 141, 142, 1)',
        customBlueLight: 'rgba(15, 100, 100, 1)'
      }
    },
  },
  plugins: [],
}

