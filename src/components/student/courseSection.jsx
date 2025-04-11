import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {AppContext} from '../../context/appContext.jsx'
import CourseCard from '../../components/student/courseCard.jsx'

const courseSection = () => {

  const context = useContext(AppContext);

    if (!context) {
        console.error("MyContext is undefined. Make sure AppContextProvider is wrapping this component.");
        return <p>Error: Context not available</p>;
    }
    const { allCourses } = context;

    
  return (
    <div >
      <h2 className='text-4xl my-5 font-bold text-gray-800'>Learn from the best</h2>
      <p className='mb-10'>Discover our top-rated courses across various categories. From coding and design to business<br/> and wellness, our courses are crafted to deliver results.</p>

  
      <div className='max-w-screen-lg mx-auto'>
        <div className='grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] gap-4 px-4 md:px-0 my-10 md:my-16 '>
          {allCourses.slice(0,4).map((course,index)=> <CourseCard key={index} course={course} />)}
        </div>
      </div>
      <Link to={'/course-list'} onClick={()=>scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded !my-3'> Show all courses </Link>
    </div>
  )
}

export default courseSection
