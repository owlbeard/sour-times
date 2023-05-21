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
        sourHalfMute: '#999',
        sourBottomBorder: '#1f1f1f',
        sourLink: '#53a245',
        sourThings: '#55cbe2',
      },
      height: {
        sourLeftHeight: '88%',
        sourThingsImage: '110px',
      },
      width: {
        sourThingsImage: '110px',
      },
      minWidth: {
        sourThingsImage: '110px',
      },
      margin: {
        sourLeft: '32%',
      },
      borderWidth: {
        sourThingsBorder: '6px',
      },
      fontSize: {
        sourThingsSeen: '10px',
      },
    },
  },
  plugins: [],
};
