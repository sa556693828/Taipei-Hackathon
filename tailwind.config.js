/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#EFB829",
        blue: "#217AFF",
        green: "#25DFB2",
        grey: "#23252D",
        iconBlack: "#191A23",
        footer: "#474859",
        black: "#191A23",
      },
      boxShadow: {
        blue: "0px 0px 10px rgba(33, 122, 255, 0.25)",
        yellow: "0px 0px 10px rgba(239, 184, 41, 0.25)",
        green: "0px 0px 10px rgba(37, 223, 178, 0.25)",
      },
    },
  },
  plugins: [],
};
