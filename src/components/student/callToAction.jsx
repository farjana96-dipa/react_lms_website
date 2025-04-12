import React from 'react'
import {assets} from '../../assets/assets.js'

const callToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h2 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h2>
      <p className=''>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id <br/>veniam aliqua proident excepteur commodo do ea.</p>

      <div className='flex items-center gap-6 font-medium mt-4'>
        <button className='bg-blue-600 text-white px-10 py-3 rounded-md'>Get Started</button>
        <button className='flex items-center gap-2'>Learn More <img src={assets.arrow_icon} alt="array_icon" /></button>
      </div>
    </div>
  )
}

export default callToAction
