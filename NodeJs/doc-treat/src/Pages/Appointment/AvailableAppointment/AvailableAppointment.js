import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import SingleService from '../SingleService/SingleService';

const AvailableAppointment = ({ date }) => {


    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);


    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })

    }, [])




    return (
        <div>
            <h1 className='text-2xl text-primary text-center'>Available Appointments on :  {format(date, 'PP')}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></SingleService>)
                }
            </div>

            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} />}


        </div>
    );
};

export default AvailableAppointment;