/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3CB043',
        secondary: '#B0F8B6',
        danger: '#DC3545',
        darkGray: '#97AFB9',
        lightGray: '#E9E9D6',
        black: '#191919',
        white: '#FFFFFF'
      },
      boxShadow: {
        main: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
      }
    }
  },
  plugins: []
}
