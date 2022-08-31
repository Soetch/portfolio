module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "120": "32rem",
        "140": "31rem",
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
        "hanabiores": "url('/public/hanabiores.jpg')",
        "snmt": "url('/public/snmt.jpg')",
      },
      animation: {
        'bounce-short': 'bounce 1s ease-in-out 1'
      },
      colors: {
        "light-gray": "#4E5869",
      },
      gap: {
        "26": "104px",
        "42": "11rem",
        "120": "36rem",
        "150": "35rem",
        "200": "65rem",
      },
    },
  },
  plugins: [],
}
