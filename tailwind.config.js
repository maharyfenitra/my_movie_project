/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        128: '40em'
      }
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"]
    }
  },
  plugins: [],
}