/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1a3a8f',
          navy: '#0d1f5c',
          orange: '#f97316',
          amber: '#fb923c',
        }
      }
    },
  },
  plugins: [],
}
