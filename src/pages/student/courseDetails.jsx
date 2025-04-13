import React, { useEffect, useContext, useState } from 'react'
import { useParams} from 'react-router-dom'
import { AppContext } from '../../context/appContext'
import Loading from '../../components/student/loading'
import {assets} from '../../assets/assets'
import humanizeDuration from 'humanize-duration'



const courseDetails = () => {

  const {id} = useParams()
  const { allCourses, calculateRating, courseDuration, chapterDuration, numOfLectures, actualPrice } = useContext(AppContext)
  const [courseData, setCourseData] = useState([])
  const [openSection, setOpenSection] = useState({})
  const [isEnrolled, setIsEnrolled] = useState(false)

  const fetchCourseData = ()=> {
    const course = allCourses.find(course => course._id === id)
    setCourseData(course)
    console.log(course);
  }


  useEffect(()=>{
    fetchCourseData()
  },[])


  const toggleSection  = (index) => {
    setOpenSection((prev)=>(
      {...prev,
        [index]: !prev[index]
      }
    ));
  }

  return courseData ? (
    <>
    <div className='flex flex-col-reverse items-start text-left justify-between gap-10 px-8 md:!px-36 pt-20 md:!pt-30 relative md:!flex-row w-full bg-gradient-to-b from-cyan-100/70'>

    <div className='absolute left-0 top-0 w-full '></div>
     {/*Left Column */}
     <div className='max-w-screen-xl text-gray-500 z-10 mr-60 '>
      <h2 className='text-2xl text-gray-800 md:!text-3xl font-semibold mb-5'>{courseData.courseTitle}</h2>
      <p dangerouslySetInnerHTML={{
        __html: courseData.courseDescription ? courseData.courseDescription.slice(0,200) : ''
      }}></p>


      {/* Review and Ratings */}

             <div className='flex items-center space-x-2'>
                <p>{calculateRating(courseData)}</p>
                <div className='flex'>
                  {[...Array(5)].map((_,i)=>(<img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt="Rating" className='w-3.5 h-3.5'/>))}
                </div>
                {courseData && courseData.courseRatings && (
                  <p className='text-blue-600'>{courseData.courseRatings.length}{courseData.courseRatings.length > 1 ? ' (ratings)' : ' (rating)'}</p>
                )}

                {courseData && courseData.enrolledStudents && (
                 <p className='text-gray-500'>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? ' (students)' : ' (student)'}</p>
                )}
              </div>
              <p className='text-gray-500'>Course By <span className='text-blue-600 underline'>Farjana Dipa</span></p>

              <h2>Hello I am dipa, how are you?</h2>

              {/* Course Details */}

              <div className='pt-8 text-gray-800'>
                <h2 className='text-xl font-semibold pb-5'>Course Structure</h2>
                <div className='pt-5'>
                  {Array.isArray(courseData.courseContent) && courseData.courseContent.map((chapter,index)=> (
                    <div key={index} className=' border border-gray-300  bg-white mb-2 rounded '>
                        <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={()=>toggleSection(index)}>
                          <div className='flex items-center gap-2'>
                            <img src={assets.down_arrow_icon} alt="chapter" className={`transform transition-transform duration-300 ${openSection[index] ? 'rotate-180' : ''} h-4 w-4 inline-block `}/>
                            <p>{chapter.chapterTitle}</p>
                          </div>
                            <p className='text-gray-500'>
                              {Array.isArray(chapter.chapterContent) ? chapter.chapterContent.length : 0 }
                              {Array.isArray(chapter.chapterContent) && chapter.chapterContent.length > 1 ? ' (lectures)' : ' (lecture)'} - {chapterDuration(chapter)}</p> 
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 ${openSection[index] ? 'max-h-96' : 'max-h-0' }`}>
                          <ul className=' md:pl-10 pl-4 pr-4 py-2 border-t border-gray-300 text-gray-600'>
                            {chapter.chapterContent.map((lecture,i)=>(
                              <li key={i} className='flex items-start gap-2 py-1'>
                                  <img className='h-4 w-4' src={assets.play_icon} alt='play_icon' />  
                                
                                  <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                                     <p>{lecture.lectureTitle}</p>
                                    <div className='flex items-center gap-2'>
                                      {lecture.isPreviewFree && (<p className='text-blue-600 cursor-pointer'>Preview</p>)}
                                      <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, {units:["h","m"]})}</p>
                                    </div>
                                  </div>
                              </li>
                            ))}
                            <li></li>
                          </ul>
                        </div>
                    </div>
                  ))}
                </div>

                      
              </div>


              <div>
                <h2 className='text-2xl font-semibold mb-3 text-gray-800 mt-10'>Course Description</h2>
                <p dangerouslySetInnerHTML={{__html: courseData.courseDescription}}></p>

              </div>
     </div>


     {/*Right Column */}
     <div className='max-w-md shadow-md border border-gray-200 rounded-lg bg-white z-10 p-5'>
        <img src={courseData.courseThumbnail} alt="CourseThumbnail" className='w-full'/>
        <div className='flex items-center gap-2 pt-5'>
          <img src={assets.time_left_clock_icon} alt="time_left_clock_icon" className='w-3.5 h-3.5 rounded-md'/>
          <p className='text-red-600 text-xs'>5 days left at this price!</p>
        </div>
        <div className='py-5 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <h3 className='text-2xl font-bold text-gray-900 '>${actualPrice(courseData)}</h3>
            <p>{courseData.discount > 0 && (<del className='text-gray-500'>${courseData.coursePrice}</del>)}</p>
          </div>
         
          <p>{courseData.discount}% Off</p>
        </div>

        <div className='flex items-center gap-3'>
          
           <div className='flex items-center gap-2 border-r border-gray-300 pr-4 '>
                <img src={assets.star} alt="star" className='w-3.5 h-3.5' />
                <p>{calculateRating(courseData)}</p>
           </div>

           <div className='flex items-center gap-2 border-r border-gray-300 pr-4'>
                <img src={assets.time_clock_icon} alt="star" className='w-3.5 h-3.5' />
                <p>{courseDuration(courseData)}</p>
           </div>

           <div className='flex items-center gap-2 border-r border-gray-300 pr-4'>
                <img src={assets.lesson_icon} alt="star" className='w-3.5 h-3.5' />
                <p>{numOfLectures(courseData)} lessons</p>
                
           </div>
        </div>

        <button className='bg-blue-600 w-full font-semibold text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 my-4'>{isEnrolled ? 'Already Enrolled' : 'Enroll Now'}</button>

        <div>
          <p className='text-2xl font-bold mt-5 text-gray-900'>What's Include In This Course?</p>
          <ul className='list-disc pl-10 text-gray-600 mt-5'>
              <li className='text-gray-500 text-sm  mb-3'>Lifetime access with free updates.</li>
              <li className='text-gray-500 text-sm mb-3'>Step-by-step, hands-on project guidance.</li>
              <li className='text-gray-500 text-sm mb-3'>Downloadable resources and source code.</li>
              <li className='text-gray-500 text-sm mb-3'>Quizzes to test your knowledge.</li>
              <li className='text-gray-500 text-sm mb-3'>Certificate of completion.</li>
          </ul>
        </div>
     </div>


    </div>

    </>
  ) : <Loading/>
}

export default courseDetails
