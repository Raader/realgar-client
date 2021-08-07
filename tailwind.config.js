module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "circle-pattern": "url(/overlapping-circles.svg)",
        "square-pattern": "url(/squares.svg)",
        "yyy-pattern": "url(/yyy.svg)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
