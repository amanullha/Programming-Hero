import React from 'react';

const SingleService = ({ service, setTreatment }) => {

    const { name, slots } = service;



    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body  flex flex-col items-center justify-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ? <span> {slots[0]}</span> : <span className='text-red-700'>No Slot Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "spaces " : "space "} available</p>

                <div className="card-actions justify-end">

                    {/* <button
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-primary bg-secondary text-white mx-auto my-2"
                    >BOOK APPOINTMENT</button> */}

                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn border-0 bg-gradient-to-r from-primary to-secondary  first-letter:
                        tracking-wider text-white font-bold "

                    >BOOK APPOINTMENT</label>


                </div>
            </div>
        </div>
    );
};

export default SingleService;