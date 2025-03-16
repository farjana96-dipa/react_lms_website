/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
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
      }
    },
  },
  plugins: [],
}

 