import React from 'react';

const Footer = () => {
    return (
        <div className='bg-green-100 mt-16'>

            <div className='flex flex-col sm:flex-row items-center py-10 '>

                <div className=' mx-auto my-10 w-1/2 lg:w-1/4'>
                    <div className='flex items-center mb-5 '>
                        <img width={50} src="logo.png" alt="" />
                        <h1 className='text-2xl'>Careex</h1>
                    </div>
                    <p className='pl-5 break-all'>
                        Careex is a personal service, which service provide via Dr.XYX. I am always trying to take care my patient health in professional way
                    </p>
                </div>

                <div className=' mx-auto'>
                    <h1 className='text-2xl mb-5'>Service place </h1>
                    <ul className='pl-5'>
                        <li >12 North,Dhanmondi</li>
                        <li >xyz hospital, Polton</li>
                    </ul>
                </div>
            </div>

            <footer className='bg-green-900 py-10' >
                <p className='text-center text-white '>© 2022 CAREEX . All rights reserved
                </p>
            </footer>

        </div>
    );
};

export default Footer;