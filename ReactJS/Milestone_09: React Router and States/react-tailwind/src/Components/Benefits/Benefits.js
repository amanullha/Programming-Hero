import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';


const Benefits = ({ benefit }) => {
    return (

        <p className='flex items-center gap-2' > <CheckCircleIcon className='w-5 h-5 text-green-500'></CheckCircleIcon>
            {
                benefit
            }




        </p>

    );
};

export default Benefits;