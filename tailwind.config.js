/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '30' : '7.5rem',
        '290px' : '290px',
        '396px' : '396px',
        '500px' : '500px',
        '980px' : '980px',
      },
      fontSize:{
        'subtitle' : '1.7rem'
      },
      colors:{
        'main-gray':'#F0F2F5',
        'main-blue':'#1877F2',
        'main-blue-hover' : '#166fe5',
        'main-green' : '#42b72a',
        'main-green-hover' : '#b6a420'
      }
    },
  },
  plugins: [],
}