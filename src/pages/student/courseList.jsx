import React from 'react'
import { useContext , useState , useEffect} from 'react'
import { AppContext } from '../../context/appContext'
import SearchBar from '../../components/student/searchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/student/courseCard'
import { assets } from '../../assets/assets'

const courseList = () => {
 
  const {navigate, allCourses} = useContext(AppContext);
  const {input} = useParams();
  const [filterCourse, setFilterCourse] = useState([])

  useEffect(()=>{
    if(allCourses && allCourses.length > 0){
      const tempCourse = allCourses.slice()

      input ? 

     setFilterCourse(
      tempCourse.filter(
        item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
      )
     )
     :
     setFilterCourse(tempCourse)
      
    }
  },[allCourses,input])


  return (
    <>
    <div className='relative px-8 md:px-36 pt-20 text-left'>
      <div className='flex flex-col md:!flex-row gap-6 items-start justify-between w-full'>
        <div>
          <h1>Course List</h1>
          <p className='text-gray-500'><span className='text-blue-600 cursor-pointer' onClick={()=> navigate('/')}>Home</span> / <span>Course List</span></p>
        </div>

        <SearchBar data={input} />

      </div>
      <div className='my-5'>
        {input && <div className='inline-flex items-center gap-2 border rounded-md px-6 py-1 text-gray-500 border-gray-500/30 w-25'>
          <p>{input}</p>
          <img src={assets.cross_icon} alt="cross_icon" className='cursor-pointer ' onClick={()=>navigate('/course-list')} />
          </div>}
      </div>
        <div className=' mx-auto'>
          <div className='grid grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-4 my-16 md:p-0 px-4'>
            {filterCourse.map((course,index)=> 
              <CourseCard key={index} course={course} />)}
          </div>
        </div>
    </div>
    </>
  )
}

export default courseList
