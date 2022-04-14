import React from 'react';

import expart1 from '../../../images/experts/expert-1.jpg'
import expart2 from '../../../images/experts/expert-2.jpg'
import expart3 from '../../../images/experts/expert-3.jpg'
import expart4 from '../../../images/experts/expert-4.jpg'
import expart5 from '../../../images/experts/expert-5.jpg'
import expart6 from '../../../images/experts/expert-6.png'
import SingleExpert from '../SingleExpert/SingleExpert';





const experts = [
    { id: 1, name: 'Will Smith', img: expart1 },
    { id: 2, name: 'Chris Rock', img: expart2 },
    { id: 3, name: 'Dwnyne Rock', img: expart3 },
    { id: 4, name: 'Messy Vai', img: expart4 },
    { id: 5, name: 'Ronldo Bro', img: expart5 },
    { id: 6, name: 'Stachy jhonson', img: expart6 },
]



const Experts = () => {


    return (
        <div className='my-10 mx-auto' id='experts'>
            <div className='flex justify-center items-center gap-3 my-5 '>
                <hr className='w-3/12 ' />
                <h1 className='text-3xl text-center my-10'>Our Experts Mechanic</h1>
                <hr className='w-3/12' />
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols3 xl:grid-cols-4 gap-5 mx-auto  '>
                {
                    experts.map(expert => <SingleExpert
                        key={expert.id}
                        expert={expert}
                    ></SingleExpert>)
                }
            </div>
        </div>
    );
};

export default Experts;