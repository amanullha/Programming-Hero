import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;

    return (
        <div className='bg-white p-4 rounded-lg'>
            <h3 className='bg-indigo-300 py-2 text-2xl font-bold'>{name}</h3>
            <p>
                <span className='text-3xl font-bold'>{price}</span>
                <span className='text-sm text-gray-500 font-bold' >/month</span>
            </p>
            <div>
                <p className='text-left'>Benifits: </p>
                {
                    benefits.map(benefit => <Benefits benefit={benefit}></Benefits>)
                }
            </div>
            <button className='flex justify-center w-full bg-green-700 rounded-lg p-2 mt-4 text-white font-bold gap-2 hover:bg-green-600 hover:text-yellow-500'>
                Buy Now
                <ArrowRightIcon className='w-6 h-6'></ArrowRightIcon>

            </button>
        </div>
    );
};

export default PricingOption;