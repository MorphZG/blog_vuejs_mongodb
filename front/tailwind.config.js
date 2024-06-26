/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/*.{vue,js}",
    "./src/views/*.{vue,js,ts,jsx,tsx}",
    "./src/components/*.{vue,js,ts,jsx,tsx}"
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        imageName: "url('src/assets/background.webp')" // bg-imageName
      }
    },
    fontFamily: {
      robotoMono: ["roboto-mono", "Courier New"],
      roboto: ["roboto", "Courier New"],
      cabin: ["cabin", "Georgia"],
      lekton: ["lekton", "Arial"]
    }
  }
};
