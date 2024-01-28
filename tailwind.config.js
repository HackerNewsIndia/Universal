/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-nesting"), // Add this line to enable nesting
          require("tailwindcss"), // Make sure to include Tailwind CSS after postcss-nesting
          // other plugins...
        ],
      },
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "dark-blue": "#001122", // replace with your dark mode color
        "light-blue": "#aabbcc", // replace with your light mode color
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
