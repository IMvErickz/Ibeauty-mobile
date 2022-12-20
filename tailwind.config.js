/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.tsx",
    "./src/screens/*.tsx",

  ],
  theme: {
    extend: {
      colors: {
        'backGround': "#D7FFF8E5",
        'boldColor': "#6A8E86",
        'bgInput': "#F1F1F1",
        'bgLight': '#E5E5E5'
      }
    },
  },
  plugins: [],
}
