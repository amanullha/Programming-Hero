import React from 'react';

const About = () => {
    return (
        <div className='my-20 p-5 md:p-0'>

            <div className='bg-green-900 bg-opacity-40 px-2 py-10 flex flex-col md:flex-row  gap-5 md:gap-10   w-full md:w-10/12 mx-auto'>


                <div className='flex flex-col md:flex-row gap-5 my-5 '>


                    <div className=''>
                        <img className='w-full' style={{ height: "400px" }} src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000" alt="" />
                    </div>


                    <div className='border-l-4 px-2 flex flex-col gap-5'>
                        <h1 className='text-yellow-700 text-3xl '>
                            Annalyn Maure, DDM</h1>
                        <h2 className='text-xl text-yellow-900'>
                            Cosmetic Dentistry, General Dentistry and Orthodontics

                        </h2>
                        <h3>
                            I find joy in educating patients and seeing their dental status improve through the trust they share with me. Feel free to take a look around my
                        </h3>
                    </div>
                </div>




                <div className='flex gap-10 px-2 my-5'>

                    <div className='flex flex-col gap-5'>
                        <h1 className='px-2 bg-yellow-700 bg-opacity-10'>Name</h1>
                        <h1 className='px-2 bg-yellow-700 bg-opacity-10'>Address</h1>
                        <h1 className='px-2 bg-yellow-700 bg-opacity-10'>Email</h1>
                        <h1 className='px-2 bg-yellow-700 bg-opacity-10'>Phone </h1>
                        <h1 className='px-2 bg-yellow-700 bg-opacity-10'>Website</h1>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1>Annalyn Maure</h1>
                        <h1>XYZ, Dhaka</h1>
                        <h1>hello@gmail.com</h1>
                        <h1>+987265498753</h1>
                        <h1>www.xyx.com</h1>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;