module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandblack : '#323232',
        brandpink : {
          100 : '#FFF2F9',
          200 : '#FE83C6',
          300 : '#FA4EAB'
        },
        stateInfo : '#2F80ED',
        stateSuccess : '#27AE60',
        stateWarning : '#E2B93B',
        stateError : '#EB5757',
        customBlack : {
          100 : '#FFFFFF',
          200 : '#282828',
          300 : '#1D1D1D',
          400 : '#000000'
        },
        customGray : {
          100 : '#E0E0E0',
          200 : '#BDBDBD',
          300 : '#828282',
          400 : '#4F4F4F',
          500 : '#333333'
        },
      },
      fontFamily:{
        primaryFont : ['Playfair Display'],
        logoFont : ['Source Sans Pro'],
        logoFont2 : ['Berkshire Swash']
      },
      backgroundImage: {
        'loginbg': "url('./components/img/loginbg.svg')",
      },

      margin:{
        'half':'570px',
      }
    },
  },
  plugins: [],
}
