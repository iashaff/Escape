/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: {min: '330px'},
        sm: {min: '639.99px'},
        md: {min: '769.01px'},
        lg: {min: '1025.01px'},
        xl: {min: '1281.01px'},
      },
      fontFamily: {
        "oxygen": ['Oxygen', 'sans-serif'],
        "lora": ['Lora', 'serif']
      },
      colors: {
        'grayish-blue': '#768088',
        'very-light-grey': '#EFEFEF',
        'light-gray': '#FCFCFC',
        'very-dark-gray': '#2E2E2E',
        'grey': '#999999',
        'dark-gray': '#7A7A7A',
        'mostly-black': '#101315',
        'white-oppacity': 'rgba(255, 255, 255, 0.7)',
        'mostly-white': '#F8F8F8',
        'submit': 'rgba(255, 255, 255, 0.28)',
        'desaturated-blue': 'rgba(35, 47, 56, 0.6)',
      },
    },
  },
  plugins: [],
}

