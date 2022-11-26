/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      'blue': '#06113C',
      'blue-sky': '#85bed4',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#FF8C32',
      'green': '#008069',
      'green-whatsapp': '#00bb2d',
      'yellow': '#ffc82c',
      'gray-dark': '#626262',
      'gray': '#dddddd',
      'gray-light': '#EEEEEE',
      'white': '#fff',
      'red':'#E03B3B'
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      gridTemplateColumns : {
        'bannerpets' : '50px 1fr 50px',
        'catalogpetsmd' : '1fr 1fr 1fr',
        'catalogpetslg' : '420px 420px 420px'
      },
      colors: {
        'blue-sky': '#85bed4',
      }
    }
  },
  plugins: [],
}