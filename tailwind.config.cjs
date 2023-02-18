/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#0083B7",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}
