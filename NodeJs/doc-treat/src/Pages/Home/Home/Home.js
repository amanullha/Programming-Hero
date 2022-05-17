import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>


            <div class="bg-[url('https://i.ibb.co/QcnSrh5/doctor.jpg')] ">
                <div className='bg-white bg-opacity-80'>
                    <Banner />
                    <Info />
                </div>

            </div >


            <Services />








        </div>
    );
};

export default Home;