import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>

            <InfoCard cardTitle="Opening hour" img={clock} />
            <InfoCard cardTitle="Opening hour" img={marker} />
            <InfoCard cardTitle="Opening hour" img={phone} />

        </div>
    );
};

export default Info;