/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {

    colors: {
      'white': '#ffffff',
      'black': '#000000',
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
      'blue' : '#2d68f0',
      'transparent': 'transparent',
    },

    backgroundImage: {
      'stars': 'url("./assets/background-stars.svg")',
    },
   
    

    fontFamily: {
      'antonio': ['Antonio', 'sans-serif'],
      'spartan': ['League Spartan', 'sans-serif'],
    },

    fontSize:{
      'antonio-lg': '5rem',
      'antonio-md': '2.5rem',
      'spartan-md': '0.75rem',
      'spartan-regular': '0.875rem',
    },

    lineHeight: {
      'antonio-lg': '6.438rem',
      'antonio-md': '3.25rem',
      'spartan-md': '1.563rem',
      'spartan-regular': '1.563rem',
    },

    letterSpacing: {
      'antonio-md': '-1.5px',
      'spartan-md': '2.6px',
      'spartan-sm': '0.5px',
    },


    extend: {

     
    },
  },
  plugins: [],
}
