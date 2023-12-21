/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export const content = ["./src/**/*.{js,jsx}"]
export const theme = {
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
      custom: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      project: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },
  },
}
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'animate-duration': (value) => ({
          animationDuration: value,
        }),
      },
      { values: theme('transitionDuration') }
    )
  }),
]

