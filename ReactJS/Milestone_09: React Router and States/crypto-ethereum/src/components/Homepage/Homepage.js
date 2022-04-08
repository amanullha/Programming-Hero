

import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='md:px-16 py-8 '>
      <div className='flex flex-col justify-center h-[80vh] items-center'>
        <h1 className=' font-mono text-xl md:text-5xl '>
          Welcome to CRYPTO ETHEREUM<span className='text-6xl'>💲</span>
        </h1>
        <button className='text-2xl font-bold bg-blue-700 px-8 py-1 rounded-full text-yellow-50'>
          <Link
            to='/coins'
          >Explore Coins</Link> </button>
      </div>
    </div>
  )
}

export default Homepage
