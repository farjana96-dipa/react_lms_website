/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d'
      },
      fontSize: {
        'course-details-heading-small' : ['26px', '36px'],
        'course-details-heading-large' : ['36px','44px'],
        'home-heading-small' : ['28px', '34px'],
        'home-heading-large' : ['48px','56px'],
        'default' : ['15px', '25px']
      },
      gridTemplateColumns:{
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      safelist: [
        'h-section-height',
      ]
    },
  },
  plugins: [],
}

 