import React from 'react';

const Banner = () => {
    return (
        <div>

            <div class="hero min-h-screen ">

                <div class="hero-content flex-col lg:flex-row-reverse">

                    <img className='' src="https://i.ibb.co/yX2gkCH/banner3.png" class="max-w-sm rounded-lg shadow-2xl" />


                    <div>

                        <div>
                            <h1 className='text-[#ff5851] text-4xl md:text-5xl font-bold tracking-wider'>Emergency?</h1>
                            <h1 className='text-[#3d4461] text-5xl md:text-6xl my-2 font-bold tracking-wider'>Find Nearest</h1>
                            <h1 className='text-[#ff5851] text-4xl md:text-5xl font-bold tracking-wider'>Medical Facility</h1>
                        </div>



                        <p class="py-6">
                            Instant video consultation
                            from the best Doctors. Talk to a doctor within minutes. Our qualified network of doctors is available 24/7. You can get a consultation and prescription whenever you need. Patients and doctors can keep their previous consultation history and view online prescriptions.</p>

                        <button class="btn border-0 bg-gradient-to-r from-primary to-secondary  first-letter:
                        tracking-wider text-white font-bold ">Get Started</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;