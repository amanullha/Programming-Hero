import React from 'react';
import footerImg from '../../../assets/images/footer.png'

const Footer = () => {
    return (

        <div style={{
            background: `url(${footerImg})`
        }} className='mx-5 lg:mx-16 xl:mx-20 py-16'>

            <div className='flex flex-col md:flex-row  justify-evenly gap-5 '>
                <div>
                    <h1 className='text-2xl font-bold'>SERVICE</h1>
                    <div>
                        <h1>Emergency Checkup</h1>
                        <h1>Monthly Checkup</h1>
                        <h1>Weekly Checkup</h1>
                        <h1>Deep Checkup</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>ORAL HEALTH</h1>
                    <div>
                        <h1>Fluoride Treatment</h1>
                        <h1>Cavity Filling</h1>
                        <h1>Teeth Whitening</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>OUR ADDRESS</h1>
                    <div>
                        <h1>Bangladesh-11111 XYZ
                        </h1>

                    </div>
                </div>
            </div>

            <h1 className='text-center my-5'>Copyright@ 2022. All Rights Reserved</h1>

        </div>
    );
};

export default Footer;