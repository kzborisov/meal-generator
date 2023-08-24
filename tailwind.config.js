/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#31C48D",
        secondary: "#A06235",
        tertiary: "#151030",
        white: "#EFEFEF",
        black: "#141313",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "white-200": "#c6c6c6",
      },
    },
  },
  plugins: [],
};
