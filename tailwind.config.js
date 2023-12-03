/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      colors: {
        // secondary: "#F13024",
        primary: "#97D1D9",
        secundary: "#000000",
        tertiary: "#AFADAD",
        gray: "#F5F5F5",
        blue: "#252850"

      },
      backgroundImage: {
        explosion: "url('/assets/bg-explosion.png')",
      },
    },
  },
  plugins: [],
}

