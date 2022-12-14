/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#fff',
          dark: '#242437'
        },
        waterloo: {
          100: '#79799b',
          900: '#242437'
        },
        input: '#d9d9d9'
      },
      backgroundImage:{
        smiley: 'url(\'/smiley.png\')'
      }
    },
  },
  plugins: [],
}
