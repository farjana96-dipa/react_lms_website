import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import 'tailwindcss/tailwind.css';
import Home from './pages/student/Home.jsx'
import CourseDetails from './pages/student/courseDetails'
import CourseList from './pages/student/courseList.jsx'
import MyEnrollment from './pages/student/myEnrollment'
import Player from './pages/student/player'
import Loading from './components/student/loading'
import Educator from './pages/educator/educator.jsx'
import AddCourse from './pages/educator/addCourse.jsx'
import MyCourse from './pages/educator/myCourse.jsx'
import StudentEnrolled from './pages/educator/studentEnrolled.jsx'
import Dashboard from './pages/educator/dashboard.jsx'

import Navbar from './components/student/navbar.jsx'

export default function App() {
  const isEducator = useMatch('/educator/*')
  return (
    
    <div className='text-default min-h-screen bg-white'>
      { !isEducator &&  <Navbar /> }
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/course-list" element={<CourseList/>}></Route>
        <Route path="/course-list/:input" element={<CourseList/>}></Route>
        <Route path="/course/:id" element={<CourseDetails/>}></Route>
        <Route path="/my-enrollment" element={<MyEnrollment/>}></Route>
        <Route path="/player/:courseId" element={<Player/>}></Route>
        <Route path="/loading/:path" element={Loading}></Route>
        <Route path="/educator" element={<Educator/>}></Route>
          <Route path="/educator" element={<Dashboard/>}></Route>
          <Route path="/add-course" element={<AddCourse/>}></Route>
          <Route path="/my-course" element={<MyCourse/>}></Route>
          <Route path="/student-enrolled" element={<StudentEnrolled/>}></Route>
      </Routes>
      
    </div>
  )
}
