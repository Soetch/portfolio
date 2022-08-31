module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "120": "32rem",
        "150": "35rem",
        "200": "40rem",
      },
      width: {
        "42": "11rem",
        "120": "36rem",
        "150": "35rem",
        "200": "65rem",
      },
      backgroundImage: {
        "marceau": "url('/public/marceau.jpg')",
        "wysiaim": "url('/public/marceau.jpg')",
        "pareditions": "url('/public/marceau.jpg')",
      },
      animation: {
        'bounce-short': 'bounce 1s ease-in-out 1'
      },
      colors: {
        "light-gray": "#4E5869",
      }
    },
  },
  plugins: [],
}
