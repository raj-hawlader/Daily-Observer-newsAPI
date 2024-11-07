/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-200': '#bfdbfe',
        'red-400': '#f87171',
      },
    },
  },
  plugins: [],
}

