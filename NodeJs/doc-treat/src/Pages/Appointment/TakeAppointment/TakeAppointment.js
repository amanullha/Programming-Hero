import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';



const TakeAppointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointment date={date} />

        </div>
    );
};

export default TakeAppointment;