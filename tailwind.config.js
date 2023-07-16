/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        cinePass: "#ffff00",
        cinePassBg: "FAE392",
      },
    },
  },
  plugins: [],
};
