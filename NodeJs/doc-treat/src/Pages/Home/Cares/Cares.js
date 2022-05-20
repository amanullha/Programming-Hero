import React from 'react';

import treatment from "../../../assets/images/treatment.png"

const Cares = () => {
    return (
        <div className="hero w-full ">

            <div className="hero-content flex-col md:flex-row ">

                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />

                <div>
                    <h1 className="text-5xl font-bold text-[#3d4461]">Bring Care to Your</h1>
                    <h1 className="text-5xl font-bold text-[#ff5851] my-3">Home With One Click</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn border-0 bg-gradient-to-r from-primary to-secondary  first-letter:
                        tracking-wider text-white font-bold ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Cares;