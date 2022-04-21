import React from 'react';
import './Loading.css'


const Loading = () => {
    return (
        <div className='flex justify-center items-center my-20 mx-auto'>
            <div className='mx-auto '>
                <svg className="spinner" width="100px" height="100px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
        </div>
    );
};

export default Loading;