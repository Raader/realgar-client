module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        pattern: "url(/overlapping-circles.svg)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
