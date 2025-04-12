import React from 'react'
import Hero from '../../components/student/hero.jsx'
import Companies from '../../components/student/companies.jsx'
import CourseSection from '../../components/student/courseSection.jsx'
import Testimonial from '../../components/student/testimonial.jsx'
import CallToAction from '../../components/student/callToAction.jsx'
import Footer from '../../components/student/footer.jsx'
const Home = () => {
  return (
    <div className='flex flex-col space-y-7 items-center text-center'>
      <Hero />
      <Companies />
      <CourseSection/>
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home
