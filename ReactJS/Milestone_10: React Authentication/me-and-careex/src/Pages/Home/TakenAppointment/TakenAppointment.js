

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../CheckOut/CheckOut.css"


const TakenAppointment = () => {

    const serviceName = useParams().serviceName;

    const handleTakeAnAppointment = () => {

        console.log("An Appointment Taken!");
    }

    function time() {
        const tt = Math.floor(Math.random() * 10) + 1 //the + 1 makes it so its not 0.
        let t = "";
        t = t + tt;
        if (parseInt(t) & 1) t += " AM";
        else t += " PM";
        return t;
    }

    const date = () => {

        const d = new Date().toISOString().split("T")[0].replaceAll("-", "/")

        return d;
    }


    return (
        <div className='my-20'>


            <div className='w-full md:w-10/12 mx-auto mt-3'>

                <form onSubmit={handleTakeAnAppointment}
                    className="  appointment-form flex items-center justify-center flex-col pt-5 pb-16">

                    <h1 className='text-3xl text-center text-yellow-400'>Your Appointment Accepted</h1>
                    <h1 className='mt-5 text-xl text-center text-yellow-400'>Please come on</h1>

                    <div className=' gap-5 px-5'>


                        <div>


                            <div className='flex flex-col gap-2 text-center'>
                                <label htmlFor="date">Date</label>
                                <input className='text-center' type="text" name="date" id="" value={date()} />
                            </div>

                            <div className='flex flex-col gap-2 text-center'>
                                <label htmlFor="time">Available Time</label>
                                <input className='text-center' type="text" name="time" id="" value={time()} />
                            </div>
                        </div>
                    </div>




                </form>
            </div>


        </div>
    );
};

export default TakenAppointment;