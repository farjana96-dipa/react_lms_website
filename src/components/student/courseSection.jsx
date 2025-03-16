import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../../context/appContext'
import CourseCard from '../../components/student/courseCard.jsx'

const courseSection = () => {
  const {allCourses} = useContext(AppContext)
  return (
    <div>
      <h2>Learn from the best</h2>
      <p>Discover our top-rated courses across various categories. From coding and design to business<br/> and wellness, our courses are crafted to deliver results.</p>

      <div>
        {allCourses.slice(0,4).map((course, index) => <CourseCard key={index} course={course}/>)}
      </div>

      <Link to={'/course-list'} onClick={()=>scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'> Show all courses </Link>
    </div>
  )
}

export default courseSection
