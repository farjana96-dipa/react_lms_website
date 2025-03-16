import React from 'react'
import Hero from '../../components/student/hero.jsx'
import Companies from '../../components/student/companies.jsx'
import CourseSection from '../../components/student/courseSection.jsx'
const Home = () => {
  return (
    <div className='flex flex-col space-y-7 items-center text-center'>
      <Hero />
      <Companies />
      <CourseSection/>
    </div>
  )
}

export default Home
