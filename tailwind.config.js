/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        anime: {
          '40%, 60%': { left: '100%' },
          '100%': { left: '0%' },
        }
      },
      animation: {
        'animated': 'anime 4s steps(12) infinite',
      },
      boxShadow: {
        custom: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
      },
    },
  },
  plugins: [],
}

