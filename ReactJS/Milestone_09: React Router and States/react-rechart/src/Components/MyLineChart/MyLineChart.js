import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {


    const data = [
        { name: 'Page A', price: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', price: 500, pv: 2400, amt: 400 },
        { name: 'Page C', price: 100, pv: 2400, amt: 2200 },
        { name: 'Page D', price: 300, pv: 2400, amt: 2000 },
        { name: 'Page E', price: 400, pv: 2400, amt: 1600 }
    ];

    return (
        <LineChart width={800} height={400} data={data}>
            <Line type="monotone" dataKey="price" stroke="#8884d1" />
            <Line type="monotone" dataKey="amt" stroke="#8884d8" />
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
    );
};

export default MyLineChart;