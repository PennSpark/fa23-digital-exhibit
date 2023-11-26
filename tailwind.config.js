/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      loved: ["Loved by the King", "cursive"],
    },
    colors: {
      'highlighter': '#EDFF20',
    },
    extend: {
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))",
        13: "repeat(13, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
