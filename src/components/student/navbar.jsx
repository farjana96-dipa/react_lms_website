import React , {useContext, useState} from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';

import { UserButton, useClerk, useUser } from '@clerk/clerk-react';

import {AppContext} from '../../context/appContext.jsx';


const Navbar = () => {

const {navigate,isEducator} = useContext(AppContext)

const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');

 const {openSignIn} = useClerk();
 const {user} = useUser();

  return (
    
      
    <div className={`flex items-center justify-between py-3 px-6 sm:px-10 md:px-14 lg:px-36 border-b border-blue-500 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <img onClick={()=>navigate('/')} src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />

      <div className='hidden md:!flex lg:!flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          {
            user &&
             <>
            <button   onClick={()=>{navigate('/educator')}}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button> |
            <Link to="/my-enrollment">My Enrollments</Link>
            </>
          }
          
        </div>
      
      
      { user ? <UserButton/> : 
      <button className='bg-blue-600 text-white px-5 py-2 rounded-full' onClick={()=> openSignIn()}>Create Account</button>
      }
    
        
      </div>

      <div className='md:!hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          {user && <>
            <button   onClick={()=>{navigate('/educator')}}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>  |
            <Link to="/my-enrollment">My Enrollments</Link>
          </>}
            
          </div>
        
            {
              user ? <UserButton/> : 
              <button className=''> <img src={assets.user_icon} alt="Logo" className='w-8 lg:w-32 cursor-pointer' /></button>
            }
          
      </div>

    </div> 

   
    
  ); 
 
};

export default Navbar;
