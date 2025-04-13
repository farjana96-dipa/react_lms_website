import React, {useContext, useState} from 'react'
import { assets } from '../../assets/assets'
import {AppContext} from '../../context/appContext.jsx'
import {Link} from 'react-router-dom'

const courseCard = ({course}) => {

  const { allCourses, navigate, calculateRating } = useContext(AppContext);
  

  

  return (
    <Link to={'/course/' + course._id} onClick={()=>scrollTo(0,0)} className='border border-gray-500/30 pb-6 rounded-lg overflow-hidden'>
     <img src={course.courseThumbnail} alt="course_thmubnail" className='w-full'/>
     <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>Farjana Dipa</p>
        <div className='flex items-center space-x-2'>
          <p>{calculateRating(course)}</p>
          <div className='flex'>
            {[...Array(5)].map((_,i)=>(<img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="Rating" className='w-3.5 h-3.5'/>))}
          </div>
          <p className='text-gray-500'>{course.courseRatings.length}{course.courseRatings.length > 1 ? ' (ratings)' : ' (rating)'}</p>
        </div>
        <p>
        $
        {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
      </p>
     </div>
    </Link >
  )
}

export default courseCard
