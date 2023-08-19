/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        'backGround': "#D7FFF8E5",
        'boldColor': "#6A8E86",
        'bgInput': "#F1F1F1",
        'bgLight': '#E5E5E5',
        'borderColor': '#D9D9D9',
        'LabelColor': '#416058',
        'red-20': "#D14747A3"
      }
    },
  },
  plugins: [],
}