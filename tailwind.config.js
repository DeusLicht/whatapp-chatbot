/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'oxy' : ['Oxygen', 'sans-serif'],
        'merri': ['Merriweather\\ Sans', 'sans-serif'],
        'bowl' : ['Bowlby\\ One', 'cursive'],
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  
  plugins: [],
}
