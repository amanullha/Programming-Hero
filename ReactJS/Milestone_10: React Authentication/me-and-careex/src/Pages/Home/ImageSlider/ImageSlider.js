import React from 'react';
import Slider from 'infinite-react-carousel';

import banner1 from '../../../images/bannder/bannger1.jpg'
import banner2 from '../../../images/bannder/bannger2.jpg'
import banner3 from '../../../images/bannder/bannger3.jpg'
import banner4 from '../../../images/bannder/bannger4.jpg'
import banner5 from '../../../images/bannder/bannger5.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const ImageSlider = () => {
    const settings = {
        autoplay: true,
        arrows: false
    };


    return (
        <div className='mt-10 '>


            <div className='w-full md:w-10/12 mx-auto relative'>
                <Slider {...settings} className="z-0">

                    <div>
                        <img style={{ width: "100%", minHeight: "50vh" }} src={banner1} alt="" />
                    </div>
                    <div>
                        <img style={{ width: "100%", minHeight: "50vh" }} src={banner2} alt="" />
                    </div>
                    <div>
                        <img style={{ width: "100%", minHeight: "50vh" }} src={banner3} alt="" />
                    </div>
                    <div>
                        <img style={{ width: "100%", minHeight: "50vh" }} src={banner4} alt="" />
                    </div>
                    <div>
                        <img style={{ width: "100%", minHeight: "50vh" }} src={banner5} alt="" />
                    </div>


                </Slider>
                {/* xl:left-16 lg:left-5 md:left-5 */}
                <div className='flex justify-center'>
                    <div className=' top-1/3  z xl:mx-0 m-3 text-center -10 absolute bg-black bg-opacity-20 p-5 rounded-3xl z-10 lg:leading-loose'>

                        <h1 className='text-3xl  md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-500 mb-3 '>Annalyn Maure, DDM <sub className='text-xs bg-green-300 py-1 px-2 rounded-full text-gray-500 opacity-75'>Be Happy</sub></h1>

                        <h1 className='text-md sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold text-green-800 '>Cosmetic Dentistry, General Dentistry and Orthodontics</h1>


                        <div className="ml-16 ">

                            <p className=' lg:mt-10 text-gray-100 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg'>I find joy in educating patients and seeing their health and specially dental status improve through the trust they share with me!
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;