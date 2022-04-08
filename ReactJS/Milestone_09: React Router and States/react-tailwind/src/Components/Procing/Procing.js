import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Procing = () => {

    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, benefits: ['unlimited deals', 'fantastic deals', 'crazy deals'] },
        { id: 2, name: 'Regular', price: 10, benefits: ['lifetime free', 'unlimited deals', 'fantastic deals'] },
        { id: 3, name: 'Premium', price: 110, benefits: ['lifetime free', 'localized deals', 'crazy deals'] },
        { id: 4, name: 'Luxary', price: 500, benefits: ['lifetime free', 'unlimited deals', 'localized deals', 'fantastic deals', 'crazy deals'] }
    ];


    return (
        <div className='bg-indigo-300 p-4 mt-8 '>
            <h1 className='text-6xl font-serif text-yellow-900'>Best heals</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque fuga magnam totam aut ut amet officia dignissimos iste eius consequuntur?</p>


            <div className='grid grid-cols-3 gap-4 mt-5'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}

                    >

                    </PricingOption>
                    )
                }
            </div>



        </div>
    );
};

export default Procing;