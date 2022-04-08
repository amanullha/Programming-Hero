import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='md:px-16 py-8 bg-slate-100'>
      <div className='flex flex-col justify-center h-[80vh] items-center'>
        <h1 className=' font-mono text-xl md:text-5xl '>
          Contact US!<br></br><span className='text-base'>Select near distance office area!</span>
        </h1>

        <div className='flex  gap-5'>

          <Link to="/contact/bd-address" className='text-2xl font-bold bg-blue-700 px-8 py-1 rounded-full text-yellow-50'>
            Dhaka Office
          </Link>

          <Link to="/contact/us-address" className='text-2xl font-bold bg-blue-700 px-8 py-1 rounded-full text-yellow-50'>
            US Office
          </Link>

        </div>

        <div className='py2 justify-center items-center w-full py-44'>
          <Outlet></Outlet>
        </div>


      </div>
    </div>
  )
}

export default Contact
