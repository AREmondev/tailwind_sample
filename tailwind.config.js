/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#5358B4",
        danger: "#DD6870",
        darkGray: "#333333",
        lightGray: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
