/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'black-hover': '#202020',
        'white': '#ffffff',
        'white-hover': '#e9e9e9',
        'gray': '#EDEDED',
        'gray-hover': '#d9d9d9',

        'secondary': '#6B6B6B',
        'award-1': '#FFA0A0',
        'award-2': '#B9ECF0',
        'award-3': '#EEE9A3',
      }
    },
  },
  plugins: [],
}
