import React from 'react';
import Slider from 'infinite-react-carousel';



import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const ReactSlider = () => {
    const settings = {
        autoplay: true,
        arrows: false
    };


    return (
        <div className='relative'>

            <Slider {...settings} className="z-0">

                <div>
                    <img style={{ width: "100%", minHeight: "40vh" }} src={banner1} alt="" />
                </div>
                <div>
                    <img style={{ width: "100%", minHeight: "40vh" }} src={banner2} alt="" />
                </div>
                <div>
                    <img style={{ width: "100%", minHeight: "40vh" }} src={banner3} alt="" />
                </div>


            </Slider>

            <div className='text-center top-1/3  left-5 sm:left-1/4   z-10 absolute bg-black bg-opacity-5 p-5 rounded-lg'>

                <h1 className='text-md sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-500 '>Car Repair & Services <sub className='text-xs bg-green-300 py-1 px-2 rounded-full text-gray-500 opacity-75'>SAFETY FIRST</sub></h1>
                <div className="ml-2 sm:ml-3 md:ml-10 lg:ml-10 xl:ml-10 my-3 services-facilities">

                    <div className="f-list flex items-center ">
                        <FontAwesomeIcon className=' text-green-500 pr-2' icon={faCheckCircle} />
                        <p className='text-gray-200 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg'>7 Days Service Warranty
                        </p>

                    </div>
                    <div className="f-list flex items-center ">
                        <FontAwesomeIcon className=' text-green-500 pr-2' icon={faCheckCircle} />
                        <p className='text-gray-200 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg'>On Time Work Completion
                        </p>

                    </div>
                    <div className="f-list flex items-center ">
                        <FontAwesomeIcon className=' text-green-500 pr-2' icon={faCheckCircle} />


                        <p className='text-gray-200 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg'>Skilled & Reliable Vehicle Mechanics with Spare Parts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactSlider;