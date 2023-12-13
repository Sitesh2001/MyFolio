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
    },
  },
  plugins: [],
}

