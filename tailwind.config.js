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
        customBlueLight: 'rgba(15, 100, 100, 1)',
        cornflowerBlue: '#4C6EF5',
        ceruleanBlue: '#228BE6',
        skyBlue: '#15AABF',
        teal: '#12B886',
        darkCyan: '#208D8E',
        limeGreen: '#40C057',
        electricLime: '#82C91E',
        goldenYellow: '#FAB005',
        orange: '#FD7E14',
        redOrange: '#FA5252',
        hotPink: '#E64980',
        purple: '#BE4BDB',
        blueViolet: '#7950F2',
      }
    },
  },
  plugins: [],
}

