import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {

                const loadedData = data.data.data;

                const phoneData = loadedData.map(phone => {
                    const part = phone.slug.split('-');
                    const name = part[0];
                    const value = parseInt(part[1]);

                    return { name, value };
                }
                );

                setPhones(phoneData);
                // console.log(phoneData);
            })

    }, [])


    return (
        <BarChart width={800} height={400} data={phones}>
            <Bar dataKey="value" fill="#8884d8" />
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </BarChart>
    );
};

export default SpecialChart;