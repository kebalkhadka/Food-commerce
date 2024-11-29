import React from 'react'
import img from '../assets/logo.png'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice,jsx'


const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3'>
        <div className='flex justify-center items-center gap-2'>
            <img src={img} alt="logo" className='h-14 w-14'/>
            <h3 className='text-2xl font-bold '>Flavoro Foods</h3>
            
        </div>
        <div> 
        <input type="search" id='search' name='search' placeholder='Search Here' autoComplete='off'
        className='p-3 border border-gray-400 text-sm rounded-md outline-none w-full lg:w-[25vw]' onChange={(e)=>dispatch(setSearch(e.target.value))}/>   
        </div>
    </nav>
  )
}

export default Navbar