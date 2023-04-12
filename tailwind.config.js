/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      nunito: ['Nunito', 'cursive'],
    },
    extend: {
      colors: {
        pallete: {
          50: '#f89f5b',
          100: '#e53f71',
          200: '#9c3587',
          300: '#653780',
          400: '#3f1651',
        },
      },
    },
  },
  plugins: [],
};
