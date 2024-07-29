module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin":{
          scrollbarWidth:"thin",
          scrollbarColor:"rgb(31 29 29) currentColor"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar":{
            width: "8px"
          },
          "&::-webkit-scrollbar-track":{
            background:"white"
          },
          "&::-webkit-scrollbar-thumb":{
            background:"rgb(212 208 208)",
            backgroundRadius:"20px",
            borderRadius:"1px solid white"
          }
        }
        }
      
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}
