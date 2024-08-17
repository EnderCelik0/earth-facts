/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {

   

    extend: {
      colors: {
        'rich-black': "#070724",
        'dark-gray': "#38384F",
        'gray': "#838391",
        'turquoise': "#419EBB",
        'yellow' :"#EDA249",
        'purple' : '#6f2ed6',
        'orange' : '#D14C32',
        'orange-red' :"#D83A34",
        'dark-orange' :'#CD5120',
        'green':'#1ec2a4',
        'blue' : '#2d68f0'
      },

      fontFamily: {
        'antonio': ['Antonio', 'sans-serif'],
        'spartan': ['Spartan', 'sans-serif'],
      },

      fontSize:{
        'antonio-lg' :{ 
          'font-size': '5rem', 
          'line-height': '6.438rem',
          'font-weight': '500',
          fontFamily: 'antonio',
        },
        'antonio-md' :{ 
          'font-size': '2.5rem', 
          'line-height': '3.25rem', 
          'font-weight': '500',
          'letter-spacing': '-1.5px',
            fontFamily: 'antonio',
        },
        'spartan-md' :{ 
          'font-size': '0.75rem', 
          'line-height': '1.563rem',
          'font-weight': '700',
          'letter-spacing': '2.6px',
          fontFamily: 'spartan',
        },
        'spartan-sm' :{ 
          'font-size': '0.75rem', 
          'line-height': '1.563rem',
          'font-weight': '700',
          'letter-spacing': '0.5px',
            fontFamily: 'spartan',
        },
        'spartan-regular' :{ 
          'font-size': '0.875rem', 
          'line-height': '1.563rem',
          'font-weight': '700',
          fontFamily: 'spartan',
        },

    },
  },
  plugins: [],
}}