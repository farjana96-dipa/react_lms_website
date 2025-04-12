import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets.js'

const Testimonials = () => {
  return (
    <div className='pt-10 w-full'>
     <h2 className='text-4xl my-5 font-bold text-gray-800 mt-10'>Testimonials</h2>
     <p className='mb-10'>Hear from our learners as they share their journeys of transformation, success,<br/> and how our
     platform has made a difference in their lives.</p>


    <div className='max-w-screen-xl mx-auto '>
      <div className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-4 px-4 md:px-0 my-5 md:my-16 '>
        {dummyTestimonial.map((item,index)=>(
          <div key={index} className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-md mb-5'>
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
                <img className='h-12 w-12 rounded-full ' src={item.image} alt={item.name} />
                <div>
                  <h2 className='text-lg font-medium text-gray-800'>{item.name}</h2>
                  <p className='text-gray-800/80'>{item.role}</p>
                </div>
               
            </div>
            <div className='p-5 pb-7'>
                  <div className='flex gap-0.5'>
                   {[...Array(5)].map((_,i)=>(
                    <img src={i< Math.floor(item.rating)  ? assets.star : assets.star_blank} alt="star" key={i} className='h-5' />
                   ))}
                  </div>
                  <p className='text-gray-500 mt-5'>{item.feedback}</p>
            </div>

                  <a href="#" className='text-blue-500 underline px-5'>Read More..</a>

          </div>
        ))}
      </div>
      </div>

    </div>
  )
}

export default Testimonials
