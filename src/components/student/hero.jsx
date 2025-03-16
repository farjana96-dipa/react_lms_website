import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './searchBar.jsx'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='text-5xl relative font-bold text-gray-700 mx-w-3xl mx-auto'>
      Empower your future with the <br/>courses designed to <span className='text-blue-600'>fit your choice.</span>
      <img src={assets.sketch}  alt="sketch" className='hidden md:!block absolute -bottom-7 right-0' />
      </h1>

      <p className='text-base md:!block hidden text-gray-500 max-w-3xl mx-auto'>We bring together world-class instructors, interactive content, and a supportive community to help</p>

      <p className='text-base md:!block hidden text-gray-500 max-w-3xl mx-auto -bottom-10'>you achieve your personal and professional goals.</p>

      <SearchBar/>
    </div>
  )
}

export default Hero
