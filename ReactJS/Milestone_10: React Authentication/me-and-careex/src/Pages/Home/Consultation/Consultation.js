import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Consultation.css'

const Consultation = () => {

    const navigate = useNavigate();

    const getInTouch = () => {
        navigate('/contacts')
    }


    return (
        <div>
            <div className='w-full md:w-10/12 mx-auto my-20 bg-green-200 p-3 md:p-10 rounded-lg flex items-center justify-between'>

                <div className='w-3/4 xl:w-1/2 '>
                    <h1 className='text-4xl font-bold tracking-widest '>Get Online Consultation</h1>
                    <p style={{ textAlign: "justify" }} className='text-xl text-gray-800 my-8'>
                        In most cases, the initial consultation will be sufficient. In more complicated cases, a second, follow-up consultation may be necessary. You can contact our center at any time and ask your questions. I Will try to provide support and will answer your questions with great pleasure.
                    </p>

                    <div className='flex items-center'>
                        <h3 className='text-xl'>Take the First Step to Help</h3>
                        <p className='text-3xl ml-3 text-yellow-600'> 2441139</p>
                    </div>

                    <button onClick={getInTouch} className='bg-green-600 text-yellow-300 px-10 py-3 font-bold rounded-full hover:text-white active:bg-green-700 tracking-wider my-5'>
                        GET IN TOUCH
                    </button>
                </div>

                <div>
                    <img className="w-full" src="servicesImages/consultationBanner.jpg" alt="" />
                </div>
            </div>



        </div>
    );
};

export default Consultation;