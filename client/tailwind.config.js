/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        customOrange: '#EC3D08',
        customOrangeHover: '#CF3206',
        customerBackroundColor: '#FFB936'
      }
    },
  },
  plugins: [],
}

