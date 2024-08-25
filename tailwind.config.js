/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-bg': '#974E44',
        'brownish-white': '#FFF0ED',
        'custom-white': '#f8fafc',
      }
    },
  },
  plugins: [],
}
