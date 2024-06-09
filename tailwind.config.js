module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      boxShadow: {
        "white-lg":
          "0 10px 15px -3px rgba(255, 255, 255, 0.5), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
        "blue-lg":
          "0 10px 15px -3px rgba(0, 0, 255, 0.5), 0 4px 6px -2px rgba(30, 58, 138, 0.05)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
