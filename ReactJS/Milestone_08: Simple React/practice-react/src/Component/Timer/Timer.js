import React, { useEffect, useState } from 'react';
import Time from '../Time/Time';

const Timer = () => {

    const [time, setTime] = useState(0);

    const increaseTime = () => {
        setTime(time + 1);
        // console.log("time: ", time);
    }

    useEffect(() => {
        console.log("time: ", time);

    }, [time])// useEffect depend on time. So, useEffect will be execute if time value be changes. 


    return (
        <div>
            <Time time={time}></Time>
            <button onClick={increaseTime}>increase</button>
        </div>
    );
};

export default Timer;