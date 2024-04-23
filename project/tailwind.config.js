/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{vue,js}",
    "./src/views/*.{vue,js,ts,jsx,tsx}",
    "./src/components/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      robotoMono: "roboto-mono",
      cabin: "cabin",
      lekton: "lekton"
    }
  },
  plugins: []
};
