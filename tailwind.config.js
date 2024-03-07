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
        cornflowerBlue: 'rgba(76, 110, 245, 1)',
        cornflowerBlueLight: 'rgba(76, 110, 245, 0.5)',
        ceruleanBlue: 'rgba(34, 139, 230, 1)',
        ceruleanBlueLight: 'rgba(34, 139, 230, 0.5)',
        skyBlue: 'rgba(21, 170, 191, 1)',
        skyBlueLight: 'rgba(21, 170, 191, 0.5)',
        teal: 'rgba(18, 184, 134, 1)',
        tealLight: 'rgba(18, 184, 134, 0.5)',
        darkCyan: 'rgba(32, 141, 142, 1)',
        darkCyanLight: 'rgba(32, 141, 142, 0.5)',
        limeGreen: 'rgba(64, 192, 87, 1)',
        limeGreenLight: 'rgba(64, 192, 87, 0.5)',
        electricLime: 'rgba(130, 201, 30, 1)',
        electricLimeLight: 'rgba(130, 201, 30, 0.5)',
        goldenYellow: 'rgba(250, 176, 5, 1)',
        goldenYellowLight: 'rgba(250, 176, 5, 0.5)',
        orange: 'rgba(253, 126, 20, 1)',
        orangeLight: 'rgba(253, 126, 20, 0.5)',
        redOrange: 'rgba(250, 82, 82, 1)',
        redOrangeLight: 'rgba(250, 82, 82, 0.5)',
        hotPink: 'rgba(230, 73, 128, 1)',
        hotPinkLight: 'rgba(230, 73, 128, 0.5)',
        purple: 'rgba(190, 75, 219, 1)',
        purpleLight: 'rgba(190, 75, 219, 0.5)',
        blueViolet: 'rgba(121, 80, 242, 1)',
        blueVioletLight: 'rgba(121, 80, 242, 0.5)',
      }
    },
  },
  plugins: [],
}

