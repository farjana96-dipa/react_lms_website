import React from 'react'
import { assets } from '../../assets/assets.js'

const footer = () => {
  return (
      <footer className='bg-gray-900 text-left md:px-36 mt-10 px-5 py-5 text-white w-full'>
        <div className='grid [grid-template-columns:repeat(auto-fit,minmax(350px,1fr))] gap-4 px-4 md:px-0 pt-5  md:gap-10  border-b border-white/30 pb-10'>
          <div>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-50/80 text-sm  pt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
          <div>
            <h3 className='font-semibold text-xl text-gray-200 mb-4'>Company</h3>
            <ul>
              <li className='mb-1'><a href="#" className='text-gray-300 text-sm'>Home</a></li>
              <li className='mb-1'><a href="#" className='text-gray-300 text-sm'>About Us</a></li>
              <li className='mb-1'><a href="#" className='text-gray-300 text-sm'>Contact Us</a></li>
              <li className='mb-1'><a href="#" className='text-gray-300 text-sm'>Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold text-xl text-gray-200 mb-4'>Subscribe to our newsletter</h3>
            <p className='text-gray-300 text-sm mb-3'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className='mt-10'>
              <input type="email" placeholder='Enter your email' className='border border-gray-200/30 px-4 py-2 rounded-md bg-gray-700/30 text-white' />
              <button className='bg-blue-600 px-4 py-2 rounded-md ml-2'>Subscribe</button> 
            </div>
          </div>
        </div>
        <p className='pt-4 text-center text-white/50 text-xs md:text-sm'>Copyright 2024 © GreatStack. All Right Reserved.</p>
      </footer>
  )
}

export default footer
