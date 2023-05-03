module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],

  mode: 'jit',
  theme: {
      extend: {
          backgroundImage: {
              // "aktuell": "url('/static/home/images/gtsol-bg-aktuell.webp')",
              // "gradient-bg": "url('/static/images/gradient-bg.webp')",
              // "funktionen":"url('/static/pages/funktionen/funktionen-bg.webp')",
              // "funktionen-feature":"url('/static/pages/funktionen/features-bg.webp')",
              // "ueber-uns-header": "url('/static/pages/ueber-uns/images/Header-überuns-2.webp')",
              // "service-header": "url('/static/pages/service/images/service_header.webp')",
              // "home-header": "url('/static/pages/home/images/zeiterfassung-timez-dsgvo.webp')",
              // "home-header-mobile": "url('/static/pages/service/images/Zeiterfassung_dsgvo_Funktionen_timez-2-2048x1169.webp')",
              // "preise-header": "url('/static/pages/preise/Header-Preise-.webp')"
              
          },
          backgroundPosition: {
              bottom: 'bottom',
              center: 'center',
              left: 'left',
              'left-bottom': 'left bottom',
              'left-top': 'left top',
              right: 'right',
              'right-bottom': 'right bottom',
              'right-top': 'right top',
              top: 'top',
              'left-15perc': '15%',
              'right-85perc': '85%'
          },
          backgroundSize: {
              '55perc': '55%',
              '45perc': '45%'
          },  
          width: {
              '8xl': '1400px',
          },
          colors: {
              'primary': '#2186ab',
              'secondary': '#e0e8ea',
              'background': '#f2f2f2',
              
          },
          screens: {
              'xs': '250px',

              'sm': '640px',
              // => @media (min-width: 640px) { ... }
        
              'md': '768px',
              // => @media (min-width: 768px) { ... }
        
              'lg': '1024px',
              // => @media (min-width: 1024px) { ... }
        
              'xl': '1280px',
              // => @media (min-width: 1280px) { ... }
              'xls':'1366px',
              
              '2xl': '1536px',
              // => @media (min-width: 1536px) { ... }
            },
            
      },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin')
  ],
}
