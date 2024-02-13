/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(32, 141, 142, 1)',
        customBlueLight: 'rgba(15, 100, 100, 1)'
      }
    },
  },
  plugins: [],
}

