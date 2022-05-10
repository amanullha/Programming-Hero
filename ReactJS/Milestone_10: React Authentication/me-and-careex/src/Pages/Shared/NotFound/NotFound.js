import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center py-80 bg-gray-500 bg-opacity-70'>
            <div className="  ">
                <h2 className=' text-9xl text-red-800'>404</h2>
                <h3 className='text-white'>Oops, nothing here...</h3>
                <p className='text-white'>Please Check the URL</p>
                <p className='text-white'>Otherwise, <Link className='cursor-pointer text-yellow-400' to="home">Click here</Link> to redirect to homepage.</p>
            </div>
        </div>
    );
};

export default NotFound;