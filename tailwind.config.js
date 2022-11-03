/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "blue",
        secondary: "#2d3748",
        accent: "#ed8936",
        "accent-light": "#fed7b5",
        "accent-dark": "#dd6b20",
        "accent-darker": "#c05621",
        "accent-darkest": "#9c4221",
        "accent-lightest": "#fff5eb",
        "accent-lighter": "#fcebd7",
        "accent-lightest": "#fff5eb",
      },
    },
  },
  plugins: [],
};
