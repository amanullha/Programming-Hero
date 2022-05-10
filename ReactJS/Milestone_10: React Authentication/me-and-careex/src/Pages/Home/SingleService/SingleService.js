import React from 'react';
import './SingleService.css'
import { Link } from 'react-router-dom';

const SingleService = (props) => {

    const { service, handleTakeService } = props;
    const { id, image, charge, name, sumName, description } = service;
    console.log(service);
    return (
        <div className='relative single-service-body  shadow-lg'>
            <div className=' p-5'>

                <img className='w-full' src={image} alt="" />
                <div className=''>
                    <h1 className='pt-2 text-3xl font-bold'>{name}</h1>
                    <h2 className='text-xl mb-3'>{sumName}</h2>
                    <h2 className='mb-5 text-xl'>Charge:<small className='text-yellow-700 text-xl font-bold'> {charge}</small></h2>
                </div>
                <div>
                    <p style={{ textAlign: "justify" }} className='text-gray-500'>
                        {description.length > 150 ? description.slice(0, 150) : description}
                    </p>


                </div>



            </div>


            <div style={{ height: "150px" }} className=' take-service-btn flex   absolute bottom-0 w-full bg-green-300 bg-opacity-50 justify-center items-center'>
                <button onClick={() => handleTakeService(name)} className=' rounded-full py-1 w-1/2  text-center font-bold text-lg bg-green-600 text-yellow-300'>Book</button>
            </div>



        </div>
    );
};

export default SingleService;