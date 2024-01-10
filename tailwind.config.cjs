/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      screens: {
        "-500": { max: "500px" },
      },
    },
  },
  plugins: [],
};
