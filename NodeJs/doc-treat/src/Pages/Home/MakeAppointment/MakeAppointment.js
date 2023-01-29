import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
const MakeAppointment = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='my-16 p-5'>

            <section className='flex justify-center items-center '>

                <div className='flex-1 hidden md:block'>
                    <img className='mt-[-120px]' src={doctor} alt="" />
                </div>

                <div className='flex-1 '>
                    <h1 className='text-xl text-primary'>Appointment</h1>
                    <h1 className='my-2 text-xl text-gray-200'>Make an Appointment Today</h1>
                    <p className='text-gray-300 my-2'>
                        DocTreat is an online medical service app (Telemedicine) where patients can get doctor consultations on video call and can get instant online prescriptions.
                    </p>
                    <PrimaryButton>Get Started</PrimaryButton>

                </div>


            </section>

        </div>
    );
};

export default MakeAppointment;