import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='bg-mobile bg-no-repeat md:w-[274px] md:h-[568px] md:bg-desktop p-5'>
      <nav className='flex flex-row md:flex-col justify-center md:justify-start gap-3'>
        <div className='flex flex-row mb-3'>
          <NavLink to={'/'} >
            <div className='nav'>1</div>
          </NavLink>
          <div className='ml-3 hidden md:block'>
            <span className=' text-sm text-gray-300'>Step 1 </span>
              <span className='font-bold text-white block'>Your info</span>
          </div>
        </div>
        <div className='flex flex-row mb-3'>
          <NavLink to={'/step2'} >
            <div className='nav'>2</div>
          </NavLink>
          <div className='ml-3 hidden md:block'>
            <span className=' text-sm text-gray-300'>Step 2</span>
              <span className='font-bold text-white block'>Select plan</span>
          </div>
        </div>
        <div className='flex flex-row mb-3'>
          <NavLink to={'/step3'} >
            <div className='nav'>3</div>
          </NavLink>
          <div className='ml-3 hidden md:block'>
            <span className=' text-sm text-gray-300'>Step 3</span>
              <span className='font-bold text-white block'>Add-ons</span>
          </div>
        </div>
        <div className='flex flex-row mb-3'>
          <NavLink to={'/step4'} >
            <div className='nav'>4</div>
          </NavLink>
          <div className='ml-3 hidden md:block '>
            <span className='text-sm text-gray-300'>Step 4</span>
              <span className='font-bold text-white block'>Summary</span>
          </div>
        </div>
      </nav>
     

    </div>
  )
} 