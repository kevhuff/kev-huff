/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
