/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
    },
    screens: {
      xlg: { max: "1240px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "550px" },
      xs: { max: "375px" },
    },
  },
  plugins: [],
};
