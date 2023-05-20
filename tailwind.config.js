/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sour: '#82C24A',
        sourBG: '#2D2D2D',
        sourText: '#BDBDBD',
        sourMute: '#666',
        sourBottomBorder: '#1f1f1f',
      },
      height: {
        sourLeftHeight: '90%',
      },
    },
  },
  plugins: [],
};
