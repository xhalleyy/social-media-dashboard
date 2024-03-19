/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mobile: '375px',
      desktop: '1440px'
    },
    colors: {
      lime: '#1db489',
      brightRed: '#dc414c',
      facebook: '	#198ff5',
      twitter: '#1ca0f2',
      youtube: '#c4032a',
      lighttoggle: '#aeb3cb',
      darkblue: '#1e202a',
      bluetop: '#1f212e',
      bluecard: '#252a41',
      bluetext: '#8b97c6',
      white: '#ffffff',
      paleblue: '#f5f7ff',
      lightgrayblue: '#f0f2fa',
      darkgrayblue: '#63687e'

    },
    extend: {
      fontFamily: {
        'inter-reg' : ['inter-reg'],
        'inter-bold' : ['inter-bold'],
      },
    },
  },
  plugins: [],
}