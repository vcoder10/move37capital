/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
          screens: {
            'landscapes': {
                'raw': `only screen and (max-height: 600px) and (orientation: landscape)`
            }
        }
    }
},
  plugins: [],
  
 
}
