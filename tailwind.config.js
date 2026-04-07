/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/Home/sections/**/*.{js,ts,jsx,tsx}",
    "./src/pages/Profile/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kinyellow: '#facc15', // This matches the exact brand yellow
      },
    },
  },
  plugins: [],
}
