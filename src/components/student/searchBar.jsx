import React,{useState} from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const searchBar = ({data}) => {

    const navigate = useNavigate();

    const [input,setInput] = useState(data ? data : '');

    const onSearchHandler = (e)=>{
      e.preventDefault();
      navigate('/course-list/' + input)
    }

  return (
    <div>
      <form action="" className=' w-full md:h-14 h-12 flex items-center bg-white rounded border border-gray-500/20' onSubmit={onSearchHandler}>
        <img src={assets.search_icon} alt="search_icon" className='w-10 md:w-auto px-3' />
        <input onChange={e=>setInput(e.target.value)} type="text" placeholder='search for course' className='w-full h-full outline-none text-gray-500/80' />
        <button type='submit' className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1'>Search</button>
      </form>
    </div>
  )
}

export default searchBar
