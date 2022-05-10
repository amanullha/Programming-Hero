import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TopHeader = () => {
    return (
        <div className=' bg-white '>
            <header className='header-head flex items-center justify-evenly hidden md:flex w-full md:w-10/12 mx-auto mb-2' >

                <p className='cursor-pointer flex items-center'>
                    <FontAwesomeIcon className='mr-2 text-blue-800' icon={faPhone} />
                    <small>+01812312359</small>
                </p>
                <p className='cursor-pointer flex items-center'>
                    <FontAwesomeIcon className='mr-2 text-blue-800' icon={faEnvelope} />
                    <small>careex.help@gmail.com</small>
                </p>
                <p className='cursor-pointer flex items-center '>
                    <FontAwesomeIcon className='mr-2 text-blue-800' icon={faMap} />
                    <small>19 Dhanmondi,Dhaka</small>
                </p>

            </header>
        </div>
    );
};

export default TopHeader;