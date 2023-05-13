/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6dcd',
        secondary: '#5a60ea',
      },
      boxShadow: {
        focus: '0px 0px 20px 1px #5a60ea',
        normal: '0px 0px 20px 1px black',
      },
      fontFamily: {
        primary: ['"Ysabeau"', 'sans-serif'],
        secondary: ['"Sigmar"', 'cursive'],
      },
    },
  },
  plugins: [],
}
