module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'gbrown': {
          100: '#655A3E',
          200: '#7E714E',
          300: '#A4946B',
          400: '#D1C9B3',
          500: '#E0DCCC',
          600: '#F7F6F2'
        },
        'gteal': {
          100: '#E8FAFF',
          200: '#C2F2FF',
          300: '#99E9FF',
          400: '#00C0F5',
          500: '#0090B8',
          600: '#0080A3',
          700: '#00607A'
        }
      },
      fontFamily: {
        'russo': 'Russo One, sans-serif',
        'chewy': 'Chewy, cursive',
        'sigmar': 'Sigmar One, cursive' // main
      },
      animation: {
        'switch-text': 'slide 5s infinite',
      },
      keyframes: {
        slide: {
          '0%, 20%, 50%, 100%': { top: '0' },
          '35%, 50%': { top: '-28px' },
          '60%, 75%': { top: '-56px' },
          '85%, 95%': { top: '-84px' }
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("daisyui"),
  ]
}
